import { ContainerName } from "./types";

export interface AppConfig {
    AzureWebJobsStorage: string
    ActivityLogTable: string
    SkdGraphqlURI: string
    AllowMultipleKitSnapshotsPerDay: boolean
    RejectIfPriorSnapshotNotAcknowledged: boolean
    INCOMING_CONTAINER: ContainerName
    UNKNOWN_FILETYPE_CONTAINER: ContainerName
    BOM_CONTAINER: ContainerName
    SHIP_CONTAINER: ContainerName
}

export function getAppConfig(): AppConfig {
    const config: AppConfig = {
        AzureWebJobsStorage: process.env.AzureWebJobsStorage,
        ActivityLogTable: process.env.ActivityLogTable || 'ActivityLog',
        SkdGraphqlURI: process.env.SkdGraphqlURI,
        AllowMultipleKitSnapshotsPerDay: !!process.env?.AllowMultipleKitSnapshotsPerDay ?? false,
        RejectIfPriorSnapshotNotAcknowledged: !!process.env?.RejectIfPriorSnapshotNotAcknowledged ?? false,
        INCOMING_CONTAINER: 'incoming',
        UNKNOWN_FILETYPE_CONTAINER: 'unknown-fileType',
        BOM_CONTAINER: 'bom',
        SHIP_CONTAINER: 'ship',
    }

    return config;
}