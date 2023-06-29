import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../shared/appConfig";
import { skdService } from "../shared/skdService";
import { UpdatePartnerStatusInput } from "../shared/graphql/generated/graphql";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const appConfig = getAppConfig();
    const service = new skdService(appConfig.SkdGraphqlURI);
    try {

        const plants = await service.getPlants()
        for (const plant of plants) {

            context.log(`updating partner status for ${plant.code}`)
            // updates pending kits
            const updatePendingKits = await service.getUpdatePartnerStatusPendingKits(plant.code)
            context.log(`${updatePendingKits.length} pending kits to update`)

            for (const kit of updatePendingKits) {
                await updateKitPartnerStatus(kit.kitNo)
                await syncKitToPartnerStatus(kit.kitNo)
            }
        }
    } catch (error) {
        context.log(`error updating partner status`)
        context.log(error.message)
        throw error
    }

    async function updateKitPartnerStatus(kitNo: string): Promise<boolean> {
        const input: UpdatePartnerStatusInput = { kitNo }
        const { payload, errors } = await service.updatePartnerStatus(input);

        if (errors.length > 0) {
            context.log(`error updating partner status for kit ${kitNo}: ${errors.map(err => err.message).join(', ')}`);
        } else {
            context.log(`updated partner status for kit ${kitNo}, new statuses: ${payload.updatedStatuses.join(', ')}`)
        }

        return errors.length === 0
    }

    async function syncKitToPartnerStatus(kitNo: string): Promise<boolean> {
        const input: UpdatePartnerStatusInput = { kitNo }
        const { payload, errors } = await service.syncKitStatusToPartnerStatus(input);

        if (errors.length > 0) {
            context.log(`error syncing partner status for kit ${kitNo}: ${errors.map(err => err.message).join(', ')}`);
        } else {
            context.log(`synced partner status for kit ${kitNo}, synched statuses: ${payload.updatedStatuses.join(', ')}`)
        }

        return errors.length === 0
    }
};

export default timerTrigger;
