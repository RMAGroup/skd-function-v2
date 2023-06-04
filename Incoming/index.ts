import { AzureFunction, Context } from "@azure/functions"
import { FordInterfaceFileType } from "../shared/graphql/generated/graphql";
import { getAppConfig } from "../shared/appConfig";
import { AzureBlobService } from "../shared/AzureBlobService";
import { skdService } from "../shared/skdService";
import { ContainerName } from "../shared/types";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    context.log(
        "Blob trigger function processed blob \n Name:",
        context.bindingData.name, "\n Blob Size:",
        inBlob.length, "Bytes");

    try {
        const appConfig = getAppConfig();
        const service = new skdService(appConfig.SkdGraphqlURI);
        const blobService = new AzureBlobService<ContainerName>(appConfig.AzureWebJobsStorage)

        const filename = context.bindingData.name;
        const fileType = await service.getFordInerfaceFileType(filename);

        switch (fileType) {
            case FordInterfaceFileType.Bom: {
                context.bindings.bomBlob = inBlob
                break;
            }
            case FordInterfaceFileType.Ship: {
                context.bindings.shipBlob = inBlob
                break
            }
            default:
                context.bindings.unknownFileTypeBlob = inBlob
                break;
        }

        blobService.deleteBlob(appConfig.INCOMING_CONTAINER, filename);

    } catch (error) {
        context.log(`error processing incoming file: ${context.bindingData.name}`)
        context.log(error.message)
        throw error
    }
};

export default blobTrigger;
