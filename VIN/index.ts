import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../shared/appConfig";
import { AzureBlobService } from "../shared/AzureBlobService";
import { AzureTableService } from "../shared/AzureTableService";
import { addActivityLogEntry } from "../shared/activityLog";
import { skdService } from "../shared/skdService";
import { ContainerName } from "../shared/types";


const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    try {
        // service
        const appConfig = getAppConfig();
        const tableService = new AzureTableService(appConfig.AzureWebJobsStorage)
        const service = new skdService(appConfig.SkdGraphqlURI);
        const blobService = new AzureBlobService<ContainerName>(appConfig.AzureWebJobsStorage)

        // copy to archive and delete original
        context.bindings.outBlob = inBlob
        blobService.deleteBlob(appConfig.VIN_CONATAINER, context.bindingData.name)

        // import / create vehicle lot
        const text = inBlob.toString('utf-8', 0)
        const input = await service.parseVinFile(text)
        const { errors } = await service.importVIN(input)

        // write to data table
        const description = `vin: ${input?.kits.map(l => l.vin).join(', ')}`
        const errorMessage = errors.map(err => err.message).join(', ')
        await addActivityLogEntry({
            importType: 'vin',
            plantCode: input.plantCode,
            sequence: input.sequence,
            filename: context.bindingData.name,
            description,
            error: errorMessage
        }, tableService)

        // generate vin import acknowledgement and write to VIN_ACK_CONTAINER
        const result = await service.genVinImportAck(input.plantCode, input.sequence);
        blobService.saveBlob(appConfig.VIN_ACK_CONTAINER, result.filename, result.payloadText)

        // log 
        if (errors.length > 0) {
            const errorMessage = errors.map(t => t.message).join(', ')
            context.log("import VIN error: " + errorMessage)
        } else {
            const message = `import VIN file success: ${input.plantCode}-${input.sequence}`
            context.log(message)
        }

    } catch (error) {
        context.log(`import VIN file error: ${context.bindingData.name}`)
        context.log(error.message)
        throw error
    }
};

export default blobTrigger;


