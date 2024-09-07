import { app, InvocationContext } from "@azure/functions";
import { skdService } from "../Common/skdService";
import { getAppConfig } from "../Common/appConfig";
import { AzureTableService } from "../Common/AzureTableService";
import { ContainerName, TextFile } from "../Common/types";
import { AzureBlobService } from "../Common/AzureBlobService";

app.storageBlob('BOM', {
    path: 'bom/{name}',
    connection: 'AzureWebJobsStorage',
    handler: Bom
});

export async function Bom(blob: Buffer, context: InvocationContext): Promise<void> {

    const { service } = initializeServices();
    const appCOnfig = getAppConfig();
    const blobService = new AzureBlobService<ContainerName>(appCOnfig.AzureWebJobsStorage)

    context.log(`Writing to ${ContainerName.BomArchive}: ${context.triggerMetadata.name}`);
    blobService.saveBlob(ContainerName.BomArchive, context.triggerMetadata.name as string, blob.toString());

    try {

        const parsedBom = await service.parseBomFileText({ filename: context.triggerMetadata.name as string, text: blob.toString() });

        context.log(`parsed bom file ${parsedBom.payload.plantCode}  ${parsedBom.payload.sequenceNumber}  ${parsedBom.payload.kittingPlantCode} Lots: ${parsedBom.payload.lots.length}`);

        // mport
        const textFile: TextFile = { filename: context.triggerMetadata.name as string, text: blob.toString() };
        const errors = await importBom(service, textFile);

        // if errors, log and return
        if (errors.length > 0) {
            const errorMessage = errors.map(err => err.description).join(', ');
            context.log(`bom import error: ${errorMessage}`);
            return
        }
        
        context.log(`imported bom file ${context.triggerMetadata.name}`);

        context.log(`Deleting from ${ContainerName.Bom}: ${context.triggerMetadata.name}`);
        blobService.deleteBlob(ContainerName.Bom, context.triggerMetadata.name as string);
    
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

function logError(context: InvocationContext, error: Error) {
    context.log(`error importing bom file: ${context.triggerMetadata.name}`);
    context.log(error.message);
    throw error;
}


