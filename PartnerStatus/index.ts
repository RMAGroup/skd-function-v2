import { AzureFunction, Context } from "@azure/functions"

const blobTrigger: AzureFunction = async function (context: Context, inBlob: any): Promise<void> {
    context.bindings.archiveBlob = inBlob
    context.log("Copy partner status blob to partner status archive")
};

export default blobTrigger;
