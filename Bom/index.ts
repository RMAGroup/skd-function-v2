import { AzureFunction, Context } from "@azure/functions"
import { skdService } from "../shared/skdService";
import { AzureBlobService } from "../shared/AzureBlobService";
import { getAppConfig } from "../shared/appConfig";
import { addActivityLogEntry } from "../shared/activityLog";
import { AzureTableService } from "../shared/AzureTableService";
import { ContainerName } from "../shared/types";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    try {
        
        // service
        const appConfig = getAppConfig();
        const service = new skdService(appConfig.SkdGraphqlURI);
        const tableService = new AzureTableService(appConfig.AzureWebJobsStorage)
        const blobService = new AzureBlobService<ContainerName>(appConfig.AzureWebJobsStorage)

        // copy to archive and delete original
        context.bindings.outBlob = inBlob

        /* not deleting for now, until we have a better way to handle errors
        blobService.deleteBlob(appConfig.BOM_CONTAINER, context.bindingData.name)
        */

        // import
        const text = inBlob.toString('utf-8', 0)

        const input = await service.parseBomFile(text)
        input.filename = context.bindingData.name
        const { payload, errors } = await service.importBom(input);

        // write to data table
        const description = `lots: ${input?.lotEntries.map(l => l.lotNo).join(', ')}`
        const errorMessage = errors.map(err => err.message).join(', ')
        await addActivityLogEntry({
            importType: 'bom',
            plantCode: input.plantCode,
            sequence: input.sequence,
            filename: context.bindingData.name,
            description,
            error: errorMessage
        }, tableService)

        // log
        if (errors.length > 0) {
            context.log(`bom import error: ${errorMessage}`);
        } else {
            context.log(`imported bom file ${payload.plantCode}-${payload.sequence}   ${description}`)
        }
    } catch (error) {
        context.log(`error importing bom file: ${context.bindingData.name}`)
        context.log(error.message)
        throw error
    }
};

export default blobTrigger;
