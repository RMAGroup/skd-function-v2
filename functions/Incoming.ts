import { app, InvocationContext } from "@azure/functions";
import { getAppConfig } from "../Common/appConfig";
import { AzureBlobService } from "../Common/AzureBlobService";
import { ContainerName } from "../Common/types";

app.storageBlob('Incoming', {
    path: 'incoming/{name}',
    connection: 'AzureWebJobsStorage',
    handler: Incoming
});

export async function Incoming(blob: Buffer, context: InvocationContext): Promise<void> {

    try {
        context.log(`******** processing incoming file: ******** `);
        context.log(context.triggerMetadata.name);
        const appConfig = getAppConfig();
        const blobService = new AzureBlobService<ContainerName>(appConfig.AzureWebJobsStorage)
        const filename = context.triggerMetadata.name as string
        const fileText = blob.toString();
        const fileType: FileType = getFileType(filename);

        if (fileText.length < 500) {
            blobService.saveBlob(ContainerName.IncomingNoContent, filename, fileText)
            blobService.deleteBlob(ContainerName.Incoming, filename);
            return
        }

        // if the file is a BOM or SHIP file, save a copy to the incoming-archive container
        blobService.saveBlob(ContainerName.IncomingArchive, filename, fileText)

        // otherwise, move the file to the appropriate container based on the file type
        switch (fileType) {
            case FileType.BOM: {
                blobService.saveBlob(ContainerName.Bom, filename, fileText)
                break;
            }
            case FileType.SHIP: {
                blobService.saveBlob(ContainerName.Ship, filename, fileText)
                break
            }
            default: FileType.UNKNOWN
                blobService.saveBlob(ContainerName.UnknownFileType, filename, fileText)
                break;
        }

        // if exists in incoming-archive container, delete it

        if (fileType !== FileType.UNKNOWN && blobService.blobExists(ContainerName.IncomingArchive, filename)) {
            blobService.deleteBlob(ContainerName.Incoming, filename)
        }
    } catch (error) {
        context.log(`error processing incoming file: ${context.triggerMetadata.name}`)
        context.log(error.description)
        throw error
    }
};

enum FileType {
    SHIP,
    BOM,
    UNKNOWN
}

function getFileType(filename: string): FileType {
    if (/\.SHIP(_|.)/.test(filename)) {
        return FileType.SHIP;
    }
    if (/\.BOM(_|.)/.test(filename)) {
        return FileType.BOM;
    }
    return FileType.UNKNOWN;
}

