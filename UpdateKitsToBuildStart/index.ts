//#region imports
import { AzureFunction, Context } from "@azure/functions"
import { getAppConfig } from "../shared/appConfig";
import { UpdatePartnerStatusInput } from "../shared/graphql/generated/graphql";
import { skdService } from "../shared/skdService";
//#endregion

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    const appConfig = getAppConfig();
    const service = new skdService(appConfig.SkdGraphqlURI);
    try {

        const plants = await service.getPlants()
        for (const plant of plants) {

            const kits = await service.getBuildStartPendingKits(plant.code)
            context.log(`${plant.code} Found ${kits.length} Build Start pending kit(s)`)

            for (const kit of kits) {
                await updateToBuildStart(kit.kitNo)
            }
        }
    } catch (error) {
        context.log(`error:  ${error.message}`)
        throw error
    }

    async function updateToBuildStart(kitNo: string): Promise<string> {        
        const result = await service.updateKitToBuildStart(kitNo);

        const hasError = result.errors.length > 0

        if (hasError) {
            const errorMessage = result.errors.map(e => e.message).join(",")
            context.log(`error updating kit VIN ${ kitNo }: ${ errorMessage }`);                
        } else {
            context.log(`updated kit ${ kitNo } to BUILD START`)
        }

        return kitNo
    }
};

export default timerTrigger;
