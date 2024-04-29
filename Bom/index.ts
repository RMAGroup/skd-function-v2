import { AzureFunction, Context } from "@azure/functions"
import { skdService } from "../Common/skdService";
import { getAppConfig } from "../Common/appConfig";
import { AzureTableService } from "../Common/AzureTableService";
import { ContainerName, TextFile } from "../Common/types";
import { AzureBlobService } from "../Common/AzureBlobService";
import { blob } from "stream/consumers";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {

    const { service } = initializeServices();
    const appCOnfig = getAppConfig();
    const blobService = new AzureBlobService<ContainerName>(appCOnfig.AzureWebJobsStorage)
    // save to archive  
    blobService.saveBlob(ContainerName.BomArchive, context.bindingData.name, inBlob);

    try {

        // mport
        const textFile: TextFile = { filename: context.bindingData.name, text: inBlob.toString() };
        const errors = await importBom(service, textFile);

        // Log
        if (errors.length > 0) {
            const errorMessage = errors.map(err => err.description).join(', ');
            context.log(`bom import error: ${errorMessage}`);
        } else {
            context.log(`imported bom file ${context.bindingData.name}`);
        }
    } catch (error) {
        logError(context, error);
    }
};

function initializeServices() {
    const appConfig = getAppConfig();
    const service = new skdService(appConfig.SkdGraphqlURI);
    const tableService = new AzureTableService(appConfig.AzureWebJobsStorage);
    return { appConfig, service, tableService };
}


async function importBom(service: skdService, textFile: TextFile) {
    const { errors } = await service.importBomFileText(textFile);
    return errors;
}


function logError(context: Context, error: Error) {
    context.log(`error importing bom file: ${context.bindingData.name}`);
    context.log(error.message);
    throw error;
}

export default blobTrigger;
