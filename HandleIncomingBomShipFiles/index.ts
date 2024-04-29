import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../Common/appConfig";
import { AzureBlobService } from "../Common/AzureBlobService";
import { ContainerName } from "../Common/types";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {

    try {
        const appConfig = getAppConfig();
        const blobService = new AzureBlobService<ContainerName>(appConfig.AzureWebJobsStorage)
        const filename = context.bindingData.name;
        const fileText = inBlob.toString();
        const fileType: FileType = getFileType(filename);

        if (fileText.length < 500) {

            blobService.saveBlob(ContainerName.IncomingNoContent, filename, fileText)
            blobService.deleteBlob(ContainerName.Incoming, filename);
            return
        }

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

        // delete the file from the incoming container
        blobService.deleteBlob(ContainerName.Incoming, filename);

    } catch (error) {
        context.log(`error processing incoming file: ${context.bindingData.name}`)
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
    if (/\.SHIP_/.test(filename)) {
        return FileType.SHIP;
    }
    if (/\.BOM_/.test(filename)) {
        return FileType.BOM;
    }
    return FileType.UNKNOWN;
}


export default blobTrigger;
