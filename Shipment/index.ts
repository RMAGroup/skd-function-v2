import { AzureFunction, Context } from "@azure/functions";
import { getAppConfig } from "../shared/appConfig";
import { AzureTableService } from "../shared/AzureTableService";
import { addActivityLogEntry } from "../shared/activityLog";
import { skdService } from "../shared/skdService";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    try {
        const { appConfig, service, tableService } = initializeServices();
        const file = prepareFile(context, inBlob);

        // Archive Blob
        archiveBlob(context, inBlob);

        // Parse Shipment File
        const parsedShipFile = await parseShipFile(service, file);

        // Import Shipment
        const { payload, errors } = await importShipment(service, file);

        // Write to Data Table
        await writeToDataTable(tableService, context, parsedShipFile, errors);

        // Log Result
        logResult(context, errors, payload);
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

function prepareFile(context: Context, inBlob: any): File {
    return new File([inBlob], context.bindingData.name, { type: "text/plain" });
}

function archiveBlob(context: Context, inBlob: any) {
    context.bindings.outBlob = inBlob;
}

async function parseShipFile(service: skdService, file: File) {
    return await service.parseShipFile(file);
}

async function importShipment(service: skdService, file: File) {
    return await service.importShipment(file);
}

async function writeToDataTable(tableService: AzureTableService, context: Context, parsedShipFile: any, errors: any[]) {
    const description = `lots: ${parsedShipFile?.lots.map(l => l.lotNo).join(', ')}`;
    const errorMessage = errors.map(err => err.message).join(', ');
    await addActivityLogEntry({
        importType: 'ship',
        plantCode: parsedShipFile.plantCode,
        sequence: parsedShipFile.sequence,
        filename: context.bindingData.name,
        description,
        error: errorMessage
    }, tableService);
}

function logResult(context: Context, errors: any[], payload: any) {
    if (errors.length > 0) {
        const errorMessage = errors.map(t => t.message).join(', ');
        context.log(`Error importing ship file ${payload.plantCode}-${payload.sequence} ${errorMessage}`);
    } else {
        const message = `imported ship file: ${payload.plantCode}-${payload.sequence}, lot count: ${payload.lotCount}, part count: ${payload.partCount}`;
        context.log(message);
    }
}

function logError(context: Context, error: Error) {
    context.log(`error importing ship file: ${context.bindingData.name}`);
    context.log(error.message);
    throw error;
}

export default blobTrigger;
