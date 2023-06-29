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

            const vinPendingKits = await service.getVinPendingKits(plant.code)
            context.log(`${plant.code} Found ${vinPendingKits.length} VIN pending kit(s)`)

            for (const kit of vinPendingKits) {
                await updateKitVin(kit.kitNo)
            }
        }
    } catch (error) {
        context.log(`error:  ${error.message}`)
        throw error
    }

    async function updateKitVin(kitNo: string): Promise<string> {
        const input: UpdatePartnerStatusInput = { kitNo }
        const updateResult = await service.updateKitVin({ kitNo });

        if (updateResult.error) {
            context.log(`error updating kit VIN ${kitNo}: ${updateResult.error}`);
        } else {
            context.log(`updated kit ${kitNo}, new VIN: ${updateResult.vin}`)
        }

        return updateResult.vin
    }
};

export default timerTrigger;
