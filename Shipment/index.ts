import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../shared/appConfig";
import { AzureBlobService } from "../shared/AzureBlobService";
import { AzureTableService } from "../shared/AzureTableService";
import { addActivityLogEntry } from "../shared/activityLog";
import { skdService } from "../shared/skdService";
import { ContainerName } from "../shared/types";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {

    try {

        const appConfig = getAppConfig();
        const tableService = new AzureTableService(appConfig.AzureWebJobsStorage)
        const service = new skdService(appConfig.SkdGraphqlURI);

        // copy to archive and delete original
        context.bindings.outBlob = inBlob
        const file = new File([inBlob], context.bindingData.name, { type: "text/plain" })


        // parse
        const parsedShipFile = await service.parseShipFile(file)
        // import shipment
        const { payload, errors } = await service.importShipment(file)

        // write to data table
        const description = `lots: ${parsedShipFile?.lots.map(l => l.lotNo).join(', ')}`
        const errorMessage = errors.map(err => err.message).join(', ')
        await addActivityLogEntry({
            importType: 'ship',
            plantCode: parsedShipFile.plantCode,
            sequence: parsedShipFile.sequence,
            filename: context.bindingData.name,
            description,
            error: errorMessage
        }, tableService)

        // log
        if (errors.length > 0) {
            const errorMessage = errors.map(t => t.message).join(', ')
            context.log(`Error importing ship file ${parsedShipFile.plantCode}-${parsedShipFile.sequence}  ${errorMessage}`)
        } else {
            const message = `imported ship file: ${payload.plantCode}-${payload.sequence}, lot count: ${payload.lotCount}, part count: ${payload.partCount}`
            context.log(message)
        }
    } catch (error) {
        context.log(`error importing ship file: ${context.bindingData.name}`)
        context.log(error.message)
        throw error
    }

};

export default blobTrigger;
