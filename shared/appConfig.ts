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
    VIN_CONATAINER: ContainerName
    VIN_ACK_CONTAINER: ContainerName
    PARTNER_STATUS_CONTAINER: ContainerName
    PARTNER_STATUS_ARCHIVE_CONTAINER: ContainerName
    PARTNER_STATUS_ACK_CONTAINER: ContainerName
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
        VIN_CONATAINER: 'vin',
        VIN_ACK_CONTAINER: 'vin-ack',
        PARTNER_STATUS_CONTAINER:  "partner-status",
        PARTNER_STATUS_ARCHIVE_CONTAINER: "partner-status-archive",
        PARTNER_STATUS_ACK_CONTAINER: "partner-status-ack",
    }

    return config;
}