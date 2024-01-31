import { AzureFunction, Context } from "@azure/functions";
import { getAppConfig } from "../shared/appConfig";
import { skdService } from "../shared/skdService";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const { service } = initializeServices();

    try {
        const plants = await getPlants(service);
        await updateVinsForPlants(service, context, plants);
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

async function updateVinsForPlants(service: skdService, context: Context, plants: any[]) {
    for (const plant of plants) {
        const vinPendingKits = await service.getVinPendingKits(plant.code);
        for (const kit of vinPendingKits) {
            await updateKitVin(service, context, kit.kitNo);
        }
    }
}

async function updateKitVin(service: skdService, context: Context, kitNo: string): Promise<string> {
    const updateResult = await service.updateKitVin({ kitNo });

    if (updateResult.error) {
        context.log(`error updating kit VIN ${kitNo}: ${updateResult.error}`);
    } else {
        context.log(`updated kit ${kitNo}, new VIN: ${updateResult.vin}`);
    }

    return updateResult.vin;
}

function logError(context: Context, error: Error) {
    context.log(`error:  ${error.message}`);
    throw error;
}

export default timerTrigger;
