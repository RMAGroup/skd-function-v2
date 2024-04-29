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

export enum ContainerName {
    Incoming = 'incoming',
    IncomingNoContent = 'incoming-no-content',
    Bom = 'bom',
    BomArchive = 'bom-archive',
    Ship = 'ship',
    ShipArchive = 'ship-archive',
    UnknownFileType = 'unknown-fileType'
}




export type TextFile = {
    filename: string,
    text: string
}