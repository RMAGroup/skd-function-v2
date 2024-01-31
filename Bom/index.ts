import { AzureFunction, Context } from "@azure/functions"
import { skdService } from "../shared/skdService";
import { getAppConfig } from "../shared/appConfig";
import { addActivityLogEntry } from "../shared/activityLog";
import { AzureTableService } from "../shared/AzureTableService";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    try {
        const file = prepareFile(context, inBlob);
        const { appConfig, service, tableService } = initializeServices();
                
        archiveBlob(context, inBlob);

        // Parse BOM
        const { plantsAndSequences, lotNos } = await parseBomFile(service, file);

        // Import BOM
        const errors = await importBom(service, file);

        // Write to data table
        await writeToDataTable(tableService, context, plantsAndSequences, lotNos, errors);

        // Log
        logResult(context, errors, plantsAndSequences);
    } catch (error) {
        logError(context, error);
    }
};

function prepareFile(context: Context, inBlob: any): File {
    return new File([inBlob], context.bindingData.name, { type: "text/plain" });
}

function initializeServices() {
    const appConfig = getAppConfig();
    const service = new skdService(appConfig.SkdGraphqlURI);
    const tableService = new AzureTableService(appConfig.AzureWebJobsStorage);
    return { appConfig, service, tableService };
}

function archiveBlob(context: Context, inBlob: any) {
    context.bindings.outBlob = inBlob;
}

async function parseBomFile(service: skdService, file: File) {
    const parsedBomFile = await service.parseBomFile(file);
    const plantsAndSequences = parsedBomFile.bomPlantSets.map(b => b.plantCode + '-' + b.sequenceNumber).join(', ');
    const lotNos = parsedBomFile.bomPlantSets.flatMap(b => b.lots).map(l => l.lotNo).join(', ');
    return { plantsAndSequences, lotNos };
}

async function importBom(service: skdService, file: File) {
    const { errors } = await service.importBom(file);
    return errors;
}

async function writeToDataTable(tableService: AzureTableService, context: Context, plantsAndSequences: string, lotNos: string, errors: any[]) {
    const description = `plants: ${plantsAndSequences}, lots: ${lotNos}`;
    const errorMessage = errors.map(err => err.message).join(', ');
    await addActivityLogEntry({
        importType: 'bom',
        plantCode: plantsAndSequences,
        sequence: 0,
        filename: context.bindingData.name,
        description,
        error: errorMessage
    }, tableService);
}

function logResult(context: Context, errors: any[], plantsAndSequences: string) {
    if (errors.length > 0) {
        const errorMessage = errors.map(err => err.message).join(', ');
        context.log(`bom import error: ${errorMessage}`);
    } else {
        context.log(`imported bom file ${plantsAndSequences}`);
    }
}

function logError(context: Context, error: Error) {
    context.log(`error importing bom file: ${context.bindingData.name}`);
    context.log(error.message);
    throw error;
}

export default blobTrigger;
