import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../shared/appConfig";
import { AzureBlobService } from "../shared/AzureBlobService";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const blobService = new AzureBlobService(process.env.AzureWebJobsStorage)
    const appConfig = getAppConfig()
    
    const container = await blobService.getCreateContainer(appConfig.INCOMING_CONTAINER)
    context.log(`Found ${container.containerName} exists`)    
};

export default timerTrigger;
