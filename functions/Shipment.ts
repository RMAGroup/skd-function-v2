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
    const appCOnfig = getAppConfig();
    const blobService = new AzureBlobService<ContainerName>(appCOnfig.AzureWebJobsStorage)

    context.log(`Writing to ${ContainerName.ShipArchive}: ${context.triggerMetadata.name}`);
    blobService.saveBlob(ContainerName.ShipArchive, context.triggerMetadata.name as string, blob.toString());

    try {
        const textFile: TextFile = { filename: context.triggerMetadata.name as string, text: blob.toString() };

        // import ship file
        const result = await service.importShipmentFileText(textFile);

        // if errors, log and return
        if (result.errors.length > 0) {
            const errorMessage = result.errors.map(t => t.description).join(', ');
            context.log(`Error importing ship file ${textFile.filename} ${errorMessage}`);
            return
        }

        // delete 
        context.log(`Deleting from ${ContainerName.Ship}: ${context.triggerMetadata.name}`);
        blobService.deleteBlob(ContainerName.Ship, context.triggerMetadata.name as string);
    
        context.log(`imported ship file: ${textFile.filename}}`);

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

function logError(context: InvocationContext, error: Error) {
    context.log(`error importing ship file: ${context.triggerMetadata.name}`);
    context.log(error.message);
    throw error;
}


