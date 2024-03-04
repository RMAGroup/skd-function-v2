import { AzureFunction, Context } from "@azure/functions";
import { getAppConfig } from "../shared/appConfig";
import { skdService } from "../shared/skdService";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const { service } = initializeServices();

    try {
        const plants = await getPlants(service);
        await updateAndSyncPartnerStatusForPlants(service, context, plants);
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

async function updateAndSyncPartnerStatusForPlants(service: skdService, context: Context, plants: any[]) {
    for (const plant of plants) {
        context.log(`updating partner status for ${plant.code}`);
        const updatePendingKits = await service.getUpdatePartnerStatusPendingKits(plant.code);
        context.log(`${updatePendingKits.length} pending kits to update`);

        for (const kit of updatePendingKits) {
            await updateKitPartnerStatus(service, context, kit.kitNo);
            await syncKitToPartnerStatus(service, context, kit.kitNo);
        }
    }
}

async function updateKitPartnerStatus(service: skdService, context: Context, kitNo: string): Promise<boolean> {
    const { payload, errors } = await service.updatePartnerStatus({ kitNo });

    if (errors.length > 0) {
        context.log(`error updating partner status for kit ${kitNo}: ${errors.map(err => err.description).join(', ')}`);
    } else {
        context.log(`updated partner status for kit ${kitNo}, new statuses: ${payload.updatedStatuses.join(', ')}`);
    }

    return errors.length === 0;
}

async function syncKitToPartnerStatus(service: skdService, context: Context, kitNo: string): Promise<boolean> {
    const { payload, errors } = await service.syncKitStatusToPartnerStatus({ kitNo });

    if (errors.length > 0) {
        context.log(`error syncing partner status for kit ${kitNo}: ${errors.map(err => err.description).join(', ')}`);
    } else {
        context.log(`synced partner status for kit ${kitNo}, synched statuses: ${payload.updatedStatuses.join(', ')}`);
    }

    return errors.length === 0;
}

function logError(context: Context, error: Error) {
    context.log(`error updating partner status`);
    context.log(error.message);
    throw error;
}

export default timerTrigger;
