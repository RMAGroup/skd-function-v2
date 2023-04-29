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
  IMPORT_VIN,
  GENERATE_KIT_SNAPSHOT_RUN,
  PLANTS,
  LATEST_KIT_SNAPSHOT_RUN,
  PARTNER_STATUS_FILE_PAYLOAD,
  PARSE_SHIP_FILE,
  PARSE_VIN_FILE,
  PARSE_BOM_FILE,
  IMPORT_BOM,
  GEN_VIN_IMPORT_ACK,
  FORD_INTERFACE_FILETYPE,
  GEN_PARTNER_STATUS_FILENAME,
  IMPORT_PARTNER_STATUS_ACK,
  PARSE_PARTNER_STATUS_ACK,
  KIT_SNAPSHOT_RUN_BY_SEQUENCE,
  KIT_SNAPSHOT_RUNS,
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

  importVIN = async (input: VinFileInput) => {
    const result = await this.client.mutation<ImportVinMutation, ImportVinMutationVariables>(
      IMPORT_VIN,
      {
        input
      }
    ).toPromise();
    return result.data.importVIN
  }

  importPartnerStatusAck = async (input: PartnerStatusAckDtoInput) => {
    const result = await this.client.mutation<ImportPartnerStatusAckMutation, ImportPartnerStatusAckMutationVariables>(
      IMPORT_PARTNER_STATUS_ACK,
      {
        input
      }
    ).toPromise()
    return result.data.importPartnerStatusAck
  }


  getPlants = async () => {
    const result = await this.client.query<PlantsQuery, PlantsQueryVariables>(
      PLANTS,
      {}
    ).toPromise();

    return result.data.plants.nodes
  }

  generateKitSnapshotRun = async (input: KitSnapshotInput) => {
    // Call the GraphQL mutation to generate the kit snapshot run
    const result = await this.client.mutation<GenerateKitSnapshotRunMutation, GenerateKitSnapshotRunMutationVariables>(
      GENERATE_KIT_SNAPSHOT_RUN,
      {
        input: input
      }
    ).toPromise()
    // Return the generated kit snapshot run
    return result.data.generateKitSnapshotRun
  }

  getKitSnapshotBySequence = async (plantCode: string, sequence: number) => {
    const result = await this.client.query<KitSnapshotRunBySequenceQuery, KitSnapshotRunBySequenceQueryVariables>(
      KIT_SNAPSHOT_RUN_BY_SEQUENCE,
      {
        plantCode,
        sequence
      }
    ).toPromise()

    if (result.data.kitSnapshotRuns.nodes.length === 0) {
      return null;
    }
    return result.data.kitSnapshotRuns.nodes[0]
  }

  getKitSnapshotRuns = async (plantCode: string, sort: SortEnumType, first: number = 5) => {
    const result = await this.client.query<KitSnapshotRunsQuery, KitSnapshotRunsQueryVariables>(
      KIT_SNAPSHOT_RUNS,
      {
        plantCode,
        first,
        sort
      }
    ).toPromise()

    return result.data.kitSnapshotRuns
  }

  getLatestKitSnaphotRun = async (plantCode: string) => {
    const result = await this.client.query<LatestKitSnapshotRunQuery, LatestKitSnapshotRunQueryVariables>(
      LATEST_KIT_SNAPSHOT_RUN,
      {
        plantCode
      }
    ).toPromise()

    return result.data.kitSnapshotRuns.nodes.length > 0
      ? result.data.kitSnapshotRuns.nodes[0]
      : null
  }

  getPartnerStatusFilePayload = async (input: { plantCode: string, sequence: number }) => {
    const result = await this.client.query<PartnerStatusFilePayloadQuery, PartnerStatusFilePayloadQueryVariables>(
      PARTNER_STATUS_FILE_PAYLOAD,
      {
        plantCode: input.plantCode,
        sequence: input.sequence
      },
    ).toPromise()
    return result.data.partnerStatusFilePayload
  }

  genPartnerStatusFilename = async (id: string) => {
    const result = await this.client.query<GenPartnerStatusFilenameQuery, GenPartnerStatusFilenameQueryVariables>(
      GEN_PARTNER_STATUS_FILENAME,
      {
        id
      }
    ).toPromise()
    return result.data.genPartnerStatusFilename
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

  parseVinFile = async (text: string) => {
    const result = await this.client.query<ParseVinFileQuery, ParseVinFileQueryVariables>(
      PARSE_VIN_FILE,
      {
        text
      },
    ).toPromise()
    return result.data.parseVinFile
  }

  genVinImportAck = async (plantCode: string, sequence: number) => {
    const result = await this.client.query<GenVinImportAckQuery, GenVinImportAckQueryVariables>(
      GEN_VIN_IMPORT_ACK,
      {
        plantCode,
        sequence
      },
    ).toPromise()
    return result.data.genVinImportAcknowledgment
  }

  parsePartnerStatusAckFile = async (text: string) => {
    const result = await this.client.query<ParsePartnerStatusAckQuery, ParsePartnerStatusAckQueryVariables>(
      PARSE_PARTNER_STATUS_ACK,
      {
        text
      },
    ).toPromise()
    return result.data.parsePartnerStatusAckFile
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


