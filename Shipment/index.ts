import { AzureFunction, Context } from "@azure/functions";
import { getAppConfig } from "../shared/appConfig";
import { AzureTableService } from "../shared/AzureTableService";
import { addActivityLogEntry } from "../shared/activityLog";
import { skdService } from "../shared/skdService";
import { TextFile } from "../shared/types";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    try {
        const { service, tableService } = initializeServices();
        const textFile = prepareFile(context, inBlob);

        // Archive Blob
        archiveBlob(context, inBlob);

        // Parse Shipment File
        const parsedShipFile = await parseShipFile(service, textFile);

        // Import Shipment
        const { payload, errors } = await importShipment(service, textFile);

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

function prepareFile(context: Context, inBlob: any): TextFile {
    return { filename: context.bindingData.name, text: inBlob.toString() };
}

function archiveBlob(context: Context, inBlob: any) {
    context.bindings.outBlob = inBlob;
}

async function parseShipFile(service: skdService, textFile: TextFile) {
    return await service.parseShipFileText(textFile);
}

async function importShipment(service: skdService, textFile: TextFile) {
    return await service.importShipmentFileText(textFile);
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
