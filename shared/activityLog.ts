import { getAppConfig } from "./appConfig";
import { AzureTableService } from "./AzureTableService";
import { LogEntryOption, LogEntryTableEntity } from "./types";

/** Add row to the 'ActivityLog' Azure table */
export async function addActivityLogEntry(entry: LogEntryOption, service: AzureTableService) {
    const appConfig = getAppConfig();

    const entity: LogEntryTableEntity = {
        partitionKey: entry.plantCode,
        rowKey: service.genDateOffsetRowKey(),
        type: entry.importType,
        sequence: entry.sequence.toString().padStart(10, '0'),
        filename: entry.filename,
        description: entry.description,
        error: entry.error
    };

    const tableName = appConfig.ActivityLogTable    
    await service.saveTableEntity(tableName, entity)
}
