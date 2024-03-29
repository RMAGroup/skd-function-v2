//#region Imports
import {
  ImportShipmentMutation,
  ImportShipmentMutationVariables,
  PlantsQuery,
  PlantsQueryVariables,
  FordInterfaceFileTypeQuery,
  FordInterfaceFileTypeQueryVariables,
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
  UpdateKitVinInput,
  CreateBuildStartEventMutation,
  CreateBuildStartEventMutationVariables,
  ImoprtBomMutation,
  ImoprtBomMutationVariables,
  ParseShipmentFileMutation,
  ParseShipmentFileMutationVariables,
  ParseBomFileMutation,
  ParseBomFileMutationVariables,
  ParseBomFileResult,
  PartnerStatusUpdatePendingKitsQuery,
  PartnerStatusUpdatePendingKitsQueryVariables,
  ParseBomFileTextMutation,
  ParseBomFileTextMutationVariables,
  ImportBomFileTextMutation,
  ImportBomFileTextMutationVariables,
  ImportShipmentFileTextMutation,
  ImportShipmentFileTextMutationVariables,
  ParseShipmentFileTextMutation,
  ParseShipmentFileTextMutationVariables,
} from './graphql/generated/graphql';

import { CREATE_BUILD_START_EVENT, IMPORT_BOM, IMPORT_BOM_FILE_TEXT, IMPORT_SHIPMENT, IMPORT_SHIPMENT_FILE_TEXT, PARSE_BOM_FILE, PARSE_BOM_FILE_TEXT, PARSE_SHIP_FILE, PARSE_SHIP_FILE_TEXT, SYNC_KIT_STATUS_TO_PARTNER_STATUS, UPDATE_KIT_VIN, UPDATE_PARTNER_STATUS } from './graphql/mutation';

import {
  PLANTS,
  FORD_INTERFACE_FILETYPE,
  GET_PARTNER_STATUS_UPDATE_PENDING_KITS,
  BUILD_START_PENDING_KITS,
  PLAN_BUILD_VIN_PENDING_KITS,
} from './graphql/query';
import { Client, createClient, dedupExchange, fetchExchange } from '@urql/core';
import { omitTypenameDeep } from './util';
import { TextFile } from './types';
//#endregion

export class skdService {

  client: Client

  constructor(uri: string) {

    this.client = createClient({
      url: uri,
      exchanges: [fetchExchange],
      requestPolicy: "cache-and-network",
      fetchOptions: () => {
          return {
              headers: {
                  "GraphQL-Preflight": "1",
              },
          };
      },
      })
  }

  parseBomFile = async (file: File) => {    
    const result = await this.client.mutation<ParseBomFileMutation, ParseBomFileMutationVariables>(
      PARSE_BOM_FILE,
      {
        file: file
      }
    ).toPromise();

    return result.data.parseBomFile
  }
  parseBomFileText = async (textFile: TextFile) => {    
    const result = await this.client.mutation<ParseBomFileTextMutation, ParseBomFileTextMutationVariables>(
      PARSE_BOM_FILE_TEXT,
      {
        filename: textFile.filename,
        text: textFile.text
      }
    ).toPromise();

    return result.data.parseBomFileText
  }


  importBom = async (file: File) => {
    const result = await this.client.mutation<ImoprtBomMutation, ImoprtBomMutationVariables>(
      IMPORT_BOM,
      {
        file: file
      }
    ).toPromise();

    return result.data.importBOM
  }
  importBomFileText = async (textFile: TextFile) => {
    const result = await this.client.mutation<ImportBomFileTextMutation, ImportBomFileTextMutationVariables>(
      IMPORT_BOM_FILE_TEXT,
      {
        filename: textFile.filename,
        text: textFile.text
      }
    ).toPromise();

    return result.data.importBOMFileText
  }

  async importShipment(file: File) {
    const result = await this.client.mutation<ImportShipmentMutation, ImportShipmentMutationVariables>(
      IMPORT_SHIPMENT,
      {
        file
      }
    ).toPromise()

    return result.data.importShipment
  }
  async importShipmentFileText(textFile: TextFile) {
    const result = await this.client.mutation<ImportShipmentFileTextMutation, ImportShipmentFileTextMutationVariables>(
      IMPORT_SHIPMENT_FILE_TEXT,
      {
        filename: textFile.filename,
        text: textFile.text
      }
    ).toPromise()

    return result.data.importShipmentFileText
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
      return { vin: "", error: result.data.updateKitVin.errors[0].description }
    }
    return { vin: result.data.updateKitVin.payload.vin, error: null }
  }

  updateKitToBuildStart = async (kitNo: string) => {
    const resuilt = await this.client.mutation<CreateBuildStartEventMutation, CreateBuildStartEventMutationVariables>(
      CREATE_BUILD_START_EVENT,
      {
        kitNo
      },
    ).toPromise()

    return resuilt.data.createBuildStartEvent
  }

  getPlants = async () => {
    const result = await this.client.query<PlantsQuery, PlantsQueryVariables>(
      PLANTS,
      {}
    ).toPromise();

    return result.data.plants.nodes
  }

  parseShipFile = async (file: File) => {
    const result = await this.client.mutation<ParseShipmentFileMutation, ParseShipmentFileMutationVariables>(
      PARSE_SHIP_FILE,
      {
        file
      },
    ).toPromise()
    return result.data.parseShipmentFile
  }
  parseShipFileText = async (file: TextFile) => {
    const result = await this.client.mutation<ParseShipmentFileTextMutation, ParseShipmentFileTextMutationVariables>(
      PARSE_SHIP_FILE_TEXT,
      {
        filename: file.filename,
        text: file.text
      },
    ).toPromise()
    return result.data.parseShipmentFileText
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
    const result = await this.client.query<PartnerStatusUpdatePendingKitsQuery, PartnerStatusUpdatePendingKitsQueryVariables>(
      GET_PARTNER_STATUS_UPDATE_PENDING_KITS,
      {
        plantCode
      },
    ).toPromise()
    return result.data.partnerStatusUpdatePendingKits
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


