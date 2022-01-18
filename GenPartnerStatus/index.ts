import { AzureFunction, Context } from "@azure/functions"
import { skdService } from "../shared/skdService";

import { AzureBlobService } from "../shared/AzureBlobService";
import { KitSnapshotInput, Plant } from "../shared/graphql/generated/graphql";
import { getAppConfig } from "../shared/appConfig";
import { addActivityLogEntry } from "../shared/activityLog";
import { AzureTableService } from "../shared/AzureTableService";
import { ContainerName } from "../shared/types";


const timerTrigger: AzureFunction = async function (
    context: Context,
    myTimer: any,
): Promise<void> {

    context.log("Gen partner status triggered")

    const appConfig = getAppConfig();
    const engineComponentCode = appConfig.EnginComponentCode
    const blobStorage = new AzureBlobService<ContainerName>(appConfig.AzureWebJobsStorage)
    const service = new skdService(appConfig.SkdGraphqlURI);
    const tableService = new AzureTableService(appConfig.AzureWebJobsStorage)

    // For each assembly plant 
    for await (const plant of await service.getPlants()) {

        const snapshot = await getEnsureLatestSnapshot(plant.code)

        if (snapshot && await partnerStatusFileForSnapshotNotFound(snapshot.id)) {
            // get snapshot payload used to generate partner status file
            const payload = await service.getPartnerStatusFilePayload({
                plantCode: plant.code,
                sequence: snapshot.sequence
            });

            // write to PARTNER_STATUS_CONTAINER
            await blobStorage.saveBlob(appConfig.PARTNER_STATUS_CONTAINER, payload.filename, payload.payloadText)

            // add activiy log entry
            await addActivityLogEntry({
                importType: 'partner-status',
                plantCode: plant.code,
                sequence: payload.sequence,
                filename: payload.filename,
                description: '',
                error: ''
            }, tableService)

            // log result
            context.log("gen parnter status file done file created: ", payload.filename)
        }
    }

    /** Only generates a snapshot if
     * 1. There have been timeline status changes since the last snapshot
     * 2. There is no snapshot for the cucrrent date 
     */
    async function getEnsureLatestSnapshot(plantCode: string) {

        // generate kit timeline snapshots
        const input: KitSnapshotInput = {
            plantCode,
            engineComponentCode: engineComponentCode,
            rejectIfNoChanges: true
        }

        // generate a new snapshot.   
        // Note: will not genrate more than one per day
        await service.generateKitSnapshotRun(input)
        return await service.getLatestKitSnaphotRun(plantCode);
    }

    /** Has partner status file already been generated for this snapshot */
    async function partnerStatusFileForSnapshotNotFound(snapshotId: string) {
        const filenameForThisSnapshot = await service.genPartnerStatusFilename(snapshotId)
        const exists = await blobStorage.blobExists(appConfig.PARTNER_STATUS_ARCHIVE_CONTAINER, filenameForThisSnapshot)
        return !exists
    }
};

export default timerTrigger;
