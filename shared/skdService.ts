//#region Imports
import {
  ImportShipmentMutation,
  ImportShipmentMutationVariables,
  PlantsQuery,
  PlantsQueryVariables,
  ParseShipFileQuery,
  ParseShipFileQueryVariables,
  ShipFileInput,
  ParseBomFileQuery,
  ParseBomFileQueryVariables,
  BomFileInput,
  ImportBomMutation,
  ImportBomMutationVariables,
  FordInterfaceFileTypeQuery,
  FordInterfaceFileTypeQueryVariables,
  UpdatePartnerStatusPendingKitsQuery,
  UpdatePartnerStatusPendingKitsQueryVariables,
  BuildStartPendingKitsQuery,
  BuildStartPendingKitsQueryVariables,
  PlanBuildVinPendingKitsQuery,
  PlanBuildVinPendingKitsQueryVariables,
  UpdatePartnerStatusInput,
  UpdatePartnerStatusMutation,
  UpdatePartnerStatusMutationVariables,
  SyncKitStatusToPartnerStatusMutation,
  SyncKitStatusToPartnerStatusMutationVariables,
  UpdateKitVinMutation,
  UpdateKitVinMutationVariables,
  UpdateKitVinInput
} from './graphql/generated/graphql';

import { IMPORT_BOM, IMPORT_SHIPMENT, SYNC_KIT_STATUS_TO_PARTNER_STATUS, UPDATE_KIT_VIN, UPDATE_PARTNER_STATUS } from './graphql/mutation';

import {
  PLANTS,
  PARSE_SHIP_FILE,
  PARSE_BOM_FILE,
  FORD_INTERFACE_FILETYPE,
  UPDATE_PARTNER_STATUS_PENDING_KITS,
  BUILD_START_PENDING_KITS,
  PLAN_BUILD_VIN_PENDING_KITS,
} from './graphql/query';
import { Client, createClient, dedupExchange, fetchExchange } from '@urql/core';
//#endregion

export class skdService {

  client: Client

  constructor(uri: string) {

    this.client = createClient({
      url: uri,
      exchanges: [fetchExchange],
      fetch
    })
  }

  importBom = async (input: BomFileInput) => {
    const result = await this.client.mutation<ImportBomMutation, ImportBomMutationVariables>(
      IMPORT_BOM,
      {
        input
      }
    ).toPromise();

    return result.data.importBom
  }


  async importShipment(shipment: ShipFileInput) {
    const result = await this.client.mutation<ImportShipmentMutation, ImportShipmentMutationVariables>(
      IMPORT_SHIPMENT,
      {
        input: shipment
      }
    ).toPromise();

    return result.data.importShipment
  }

  updatePartnerStatus = async (input: UpdatePartnerStatusInput) => {
    const result = await this.client.mutation<UpdatePartnerStatusMutation, UpdatePartnerStatusMutationVariables>(
      UPDATE_PARTNER_STATUS,
      {
        input
      }
    ).toPromise()
    return result.data.updatePartnerStatus
  }

  syncKitStatusToPartnerStatus = async (input: UpdatePartnerStatusInput) => {
    const result = await this.client.mutation<SyncKitStatusToPartnerStatusMutation, SyncKitStatusToPartnerStatusMutationVariables>(
      SYNC_KIT_STATUS_TO_PARTNER_STATUS,
      {
        input
      }
    ).toPromise()
    return result.data.syncKitToPartnerStatus
  }

  updateKitVin = async (input: UpdateKitVinInput): Promise<{ vin: string, error: string }> => {
    const result = await this.client.mutation<UpdateKitVinMutation, UpdateKitVinMutationVariables>(
      UPDATE_KIT_VIN,
      {
        input
      }
    ).toPromise()
    if (result.error) {
      return { vin: "", error: "error" }
    }
    if (result.data.updateKitVin.errors.length > 0) {
      return { vin: "", error: result.data.updateKitVin.errors[0].message }
    }
    return { vin: result.data.updateKitVin.payload.vin, error: null }
  }

  getPlants = async () => {
    const result = await this.client.query<PlantsQuery, PlantsQueryVariables>(
      PLANTS,
      {}
    ).toPromise();

    return result.data.plants.nodes
  }


  parseBomFile = async (text: string) => {
    const result = await this.client.query<ParseBomFileQuery, ParseBomFileQueryVariables>(
      PARSE_BOM_FILE,
      {
        text
      }
    ).toPromise()
    return result.data.parseBomFile
  }

  parseShipFile = async (text: string) => {
    const result = await this.client.query<ParseShipFileQuery, ParseShipFileQueryVariables>(
      PARSE_SHIP_FILE,
      {
        text
      },
    ).toPromise()
    return result.data.parseShipFile
  }

  getFordInerfaceFileType = async (filename: string) => {
    const result = await this.client.query<FordInterfaceFileTypeQuery, FordInterfaceFileTypeQueryVariables>(
      FORD_INTERFACE_FILETYPE,
      {
        filename
      }
    ).toPromise()
    const r = result.data.fordInterfaceFileType
    return r;
  }

  getUpdatePartnerStatusPendingKits = async (plantCode: string) => {
    const result = await this.client.query<UpdatePartnerStatusPendingKitsQuery, UpdatePartnerStatusPendingKitsQueryVariables>(
      UPDATE_PARTNER_STATUS_PENDING_KITS,
      {
        plantCode
      },
    ).toPromise()
    return result.data.updatePartnerStatusPendingKits
  }

  getBuildStartPendingKits = async (plantCode: string) => {
    const result = await this.client.query<BuildStartPendingKitsQuery, BuildStartPendingKitsQueryVariables>(
      BUILD_START_PENDING_KITS,
      {
        plantCode
      },
    ).toPromise()
    return result.data.buildStartPendingKits
  }

  getVinPendingKits = async (plantCode: string) => {
    const result = await this.client.query<PlanBuildVinPendingKitsQuery, PlanBuildVinPendingKitsQueryVariables>(
      PLAN_BUILD_VIN_PENDING_KITS,
      {
        plantCode
      },
    ).toPromise()
    return result.data.planBuildVinPendingKits
  }

}


