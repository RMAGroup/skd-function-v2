import { getAppConfig } from "../Common/appConfig";
import { AzureTableService } from "../Common/AzureTableService";
import { skdService } from "../Common/skdService";
import { ContainerName, TextFile } from "../Common/types";
import { app, InvocationContext } from "@azure/functions";
import { AzureBlobService } from "../Common/AzureBlobService";

app.storageBlob('Shipment', {
    path: 'ship/{name}',
    connection: 'AzureWebJobsStorage',
    handler: Shipment
});

export async function Shipment(blob: Buffer, context: InvocationContext): Promise<void> {

    const { service } = initializeServices();
    const textFile: TextFile = toTextFile(context, blob);
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

function toTextFile(context: InvocationContext, inBlob: Buffer): TextFile {
    return { filename: context.triggerMetadata.name as string, text: inBlob.toString() };
}

function logError(context: InvocationContext, error: Error) {
    context.log(`error importing ship file: ${context.triggerMetadata.name}`);
    context.log(error.message);
    throw error;
}


