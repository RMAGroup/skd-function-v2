import {
  ImportShipmentMutation,
  ImportShipmentMutationVariables,
  ImportVinMutation,
  ImportVinMutationVariables,
  GenerateKitSnapshotRunMutation,
  GenerateKitSnapshotRunMutationVariables,
  KitSnapshotInput,
  PlantsQuery,
  PlantsQueryVariables,
  LatestKitSnapshotRunQuery,
  LatestKitSnapshotRunQueryVariables,
  PartnerStatusFilePayloadQuery,
  PartnerStatusFilePayloadQueryVariables,
  ParseShipFileQuery,
  ParseShipFileQueryVariables,
  ShipFileInput,
  ParseVinFileQuery,
  ParseVinFileQueryVariables,
  VinFileInput,
  ParseBomFileQuery,
  ParseBomFileQueryVariables,
  BomFileInput,
  ImportBomMutation,
  ImportBomMutationVariables,
  GenVinImportAckQuery,
  GenVinImportAckQueryVariables,
  FordInterfaceFileTypeQuery,
  FordInterfaceFileTypeQueryVariables,
  GenPartnerStatusFilenameQuery,
  GenPartnerStatusFilenameQueryVariables,
  ImportPartnerStatusAckMutation,
  ImportPartnerStatusAckMutationVariables,
  PartnerStatusAckDtoInput,
  ParsePartnerStatusAckQueryVariables,
  ParsePartnerStatusAckQuery,
  KitSnapshotRunBySequenceQuery,
  KitSnapshotRunBySequenceQueryVariables,
  SortEnumType,
  KitSnapshotRunsQuery,
  KitSnapshotRunsQueryVariables
} from './graphql/generated/graphql';

import {
  IMPORT_SHIPMENT,
  PLANTS,
  PARSE_SHIP_FILE,
  PARSE_BOM_FILE,
  IMPORT_BOM,
  FORD_INTERFACE_FILETYPE,
} from './graphql/query';
import { Client, createClient, dedupExchange, fetchExchange } from '@urql/core';

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
}


