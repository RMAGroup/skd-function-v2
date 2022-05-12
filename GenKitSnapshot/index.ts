import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../shared/appConfig";
import { KitSnapshotInput } from "../shared/graphql/generated/graphql";
import { skdService } from "../shared/skdService";

const timerTrigger: AzureFunction = async function (context: Context, genSnapshotTimer: any): Promise<void> {

    context.log('GenKitSnapshot triggered')

    const appConfig = getAppConfig();
    const service = new skdService(appConfig.SkdGraphqlURI);

    for await (const plant of await service.getPlants()) {
        await getEnsureLatestSnapshot(plant.code)
    }

    /** Only generates a snapshot if
     * 1. There have been timeline status changes since the last snapshot
     * 2. There is no snapshot for the cucrrent date 
     */
    async function getEnsureLatestSnapshot(plantCode: string) {

        context.log(`Submitting generate kit snapshot for:  ${plantCode}`)

        // generate kit timeline snapshots
        const input: KitSnapshotInput = {
            plantCode,
            rejectIfNoChanges: true,
            allowMultipleSnapshotsPerDay: appConfig.AllowMultipleKitSnapshotsPerDay
        }

        // generate a new snapshot.   
        // Note: will not genrate more than one per day
        var result = await service.generateKitSnapshotRun(input)

        if (result.errors.length) {
            var errorMessage = result.errors.map(t => t.message).join(", ").trim()
            context.log(`${plantCode}:  ${errorMessage}`)
        } else {
            context.log(`Gen kit snapshot ${result.payload.plantCode}-${result.payload.sequence}`)
        }
    }
}

export default timerTrigger;
