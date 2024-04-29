import { AzureFunction, Context } from "@azure/functions"
import { AzureBlobService } from "../Common/AzureBlobService";
import { ContainerName } from "../Common/types";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const blobService = new AzureBlobService(process.env.AzureWebJobsStorage)    
    await blobService.getCreateContainer(ContainerName.Incoming)
};

export default timerTrigger;
