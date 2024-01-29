import { AzureFunction, Context } from "@azure/functions"
import { skdService } from "../shared/skdService";
import { getAppConfig } from "../shared/appConfig";
import { addActivityLogEntry } from "../shared/activityLog";
import { AzureTableService } from "../shared/AzureTableService";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    try {
        
        // service
        const appConfig = getAppConfig();
        const service = new skdService(appConfig.SkdGraphqlURI);
        const tableService = new AzureTableService(appConfig.AzureWebJobsStorage)

        // copy to archive and delete original
        context.bindings.outBlob = inBlob
        const file: File = new File([inBlob], context.bindingData.name, { type: "text/plain" })

        console.log(file.name)

        /* not deleting for now, until we have a better way to handle errors
        blobService.deleteBlob(appConfig.BOM_CONTAINER, context.bindingData.name)
        */

        // parse
        const parsedBomFile = await service.parseBomFile(file)
        const plantsAndSequences = parsedBomFile.bomPlantSets.map(b => b.plantCode + '-' + b.sequenceNumber).join(', ')
        const lotNos = parsedBomFile.bomPlantSets.flatMap(b => b.lots).map(l => l.lotNo).join(', ')

        // import bom
        const { errors } = await service.importBom(file)

        // write to data table
        const description = `plants: ${plantsAndSequences}, lots: ${lotNos}`;
        const errorMessage = errors.map(err => err.message).join(', ')
        await addActivityLogEntry({
            importType: 'bom',
            plantCode: plantsAndSequences,
            sequence: 0,
            filename: context.bindingData.name,
            description,
            error: errorMessage
        }, tableService)

        // log
        if (errors.length > 0) {
            context.log(`bom import error: ${errorMessage}`);
        } else {
            context.log(`imported bom file ${plantsAndSequences} - ${description}`)
        }
    } catch (error) {
        context.log(`error importing bom file: ${context.bindingData.name}`)
        context.log(error.message)
        throw error
    }
};

export default blobTrigger;
