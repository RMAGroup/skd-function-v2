import { AzureFunction, Context } from "@azure/functions";
import { getAppConfig } from "../Common/appConfig";
import { AzureTableService } from "../Common/AzureTableService";
import { skdService } from "../Common/skdService";
import { ContainerName, TextFile } from "../Common/types";
import { AzureBlobService } from "../Common/AzureBlobService";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {

    const { service } = initializeServices();
    const textFile: TextFile = toTextFile(context, inBlob);
    const appCOnfig = getAppConfig();
    const blobService = new AzureBlobService<ContainerName>(appCOnfig.AzureWebJobsStorage)

    // save to archive
    blobService.saveBlob(ContainerName.ShipArchive, textFile.filename, textFile.text);

    try {
        
        // import ship file
        const result = await service.importShipmentFileText(textFile);

        // log
        if (result.errors.length > 0) {
            const errorMessage = result.errors.map(t => t.description).join(', ');
            context.log(`Error importing ship file ${textFile.filename} ${errorMessage}`);
        } else {
            context.log(`imported ship file: ${textFile.filename}}`);
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

function toTextFile(context: Context, inBlob: any): TextFile {
    return { filename: context.bindingData.name, text: inBlob.toString() };
}

function logError(context: Context, error: Error) {
    context.log(`error importing ship file: ${context.bindingData.name}`);
    context.log(error.message);
    throw error;
}

export default blobTrigger;
