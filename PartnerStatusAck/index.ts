import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../shared/appConfig";
import { skdService } from "../shared/skdService";

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {

    context.log(`Importing partner status acknowldegment file: ${context.bindingData.name}` )
    const appConfig = getAppConfig();
    const service = new skdService(appConfig.SkdGraphqlURI);

    const text = inBlob.toString('utf-8', 0)
    const parseResult = await service.parsePartnerStatusAckFile(text)

    delete parseResult.__typename

    const result = await service.importPartnerStatusAck(parseResult)

    if (result.errors.length) {
        var errorMessage = result.errors.map(t => t.message).join(", ").trim()
        context.log(errorMessage)
    } else {
        const plantCode = result.payload.kitSnapshotRun.plant.code
        const sequence = result.payload.kitSnapshotRun.sequence
    }

};

export default blobTrigger;
