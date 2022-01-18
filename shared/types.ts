import { TableEntity } from "@azure/data-tables";

export type PromiseResolvedType<T> = T extends Promise<infer R> ? R : never;

export type LogEntryType = 'bom' | 'ship' | 'vin' | 'partner-status'

export interface LogEntryOption {
    plantCode: string
    importType: LogEntryType
    sequence: number
    filename: string
    description: string
    error: string
}

export interface LogEntryTableEntity extends TableEntity {
    type: LogEntryType,
    sequence: string,
    filename: string
    description: string
    error: string
}

export type ContainerName = 
    | 'incoming' 
    | 'bom'
    | 'bom-archive'
    | 'ship'
    | 'ship-archive'
    | 'vin'
    | 'vin-ack'
    | 'vin-archive'
    | 'partner-status'
    | 'partner-status-archive'
    | 'partner-status-ack'
    | 'unknown-fileType'
