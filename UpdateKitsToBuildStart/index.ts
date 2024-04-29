import { AzureFunction, Context } from "@azure/functions";
import { getAppConfig } from "../Common/appConfig";
import { skdService } from "../Common/skdService";
import { delay } from "../Common/util";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const { service } = initializeServices();

    try {
        const plants = await getPlants(service);
        await updateKitsToBuildStart(service, context, plants);
    } catch (error) {
        logError(context, error);
    }
};

function initializeServices() {
    const appConfig = getAppConfig();
    const service = new skdService(appConfig.SkdGraphqlURI);
    return { service };
}

async function getPlants(service: skdService) {
    return await service.getPlants();
}

async function updateKitsToBuildStart(service: skdService, context: Context, plants: any[]) {
    for (const plant of plants) {
        const kits = await service.getBuildStartPendingKits(plant.code);
        context.log(`${plant.code} Found ${kits.length} Build Start pending kit(s)`);

        for (const kit of kits) {
            await updateToBuildStart(service, context, kit.kitNo);
            await delay(200);
        }
    }
}

async function updateToBuildStart(service: skdService, context: Context, kitNo: string): Promise<string> {
    const result = await service.updateKitToBuildStart(kitNo);
    const hasError = result.errors.length > 0;

    if (hasError) {
        const errorMessage = result.errors.map(e => e.description).join(",");
        context.log(`error updating kit VIN ${kitNo}: ${errorMessage}`);
    } else {
        context.log(`updated kit ${kitNo} to BUILD START`);
    }

    return kitNo;
}

function logError(context: Context, error: Error) {
    context.log(`error:  ${error.message}`);
    throw error;
}

export default timerTrigger;
