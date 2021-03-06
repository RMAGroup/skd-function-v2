import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import fetch from 'isomorphic-fetch'
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

export class skdService {

  client: ApolloClient<any>

  constructor(uri: string) {
    this.client = new ApolloClient({
      link: createHttpLink({ uri, fetch }),
      cache: new InMemoryCache({
        addTypename: false
      })
    })
  }

  importBom = async (input: BomFileInput) => {
    const result = await this.client.mutate<ImportBomMutation, ImportBomMutationVariables>({
      mutation: IMPORT_BOM,
      variables: {
        input
      }
    })

    return result.data.importBom
  }


  async importShipment(shipment: ShipFileInput) {
    const result = await this.client.mutate<ImportShipmentMutation, ImportShipmentMutationVariables>({
      mutation: IMPORT_SHIPMENT,
      variables: {
        input: shipment
      }
    })

    return result.data.importShipment
  }

  importVIN = async (input: VinFileInput) => {
    const result = await this.client.mutate<ImportVinMutation, ImportVinMutationVariables>({
      mutation: IMPORT_VIN,
      variables: {
        input
      }
    })
    return result.data.importVIN
  }

  importPartnerStatusAck = async (input: PartnerStatusAckDtoInput) => {
    const result = await this.client.mutate<ImportPartnerStatusAckMutation, ImportPartnerStatusAckMutationVariables>({
      mutation: IMPORT_PARTNER_STATUS_ACK,
      variables: {
        input
      }
    })
    return result.data.importPartnerStatusAck
  }


  getPlants = async () => {
    let result = await this.client.query<PlantsQuery, PlantsQueryVariables>({
      query: PLANTS,
      fetchPolicy: 'network-only'
    })
    return result.data.plants
  }


  generateKitSnapshotRun = async (input: KitSnapshotInput) => {
    const result = await this.client.mutate<GenerateKitSnapshotRunMutation, GenerateKitSnapshotRunMutationVariables>({
      mutation: GENERATE_KIT_SNAPSHOT_RUN,
      variables: {
        input: input
      }
    })
    return result.data.generateKitSnapshotRun
  }

  getKitSnapshotBySequence = async (plantCode: string, sequence: number) => {
    const result = await this.client.query<KitSnapshotRunBySequenceQuery, KitSnapshotRunBySequenceQueryVariables>({
      query: KIT_SNAPSHOT_RUN_BY_SEQUENCE,
      variables: {
        plantCode,
        sequence
      }
    })

    if (result.data.kitSnapshotRuns.nodes.length === 0) {
      return null;
    }
    return result.data.kitSnapshotRuns.nodes[0]
  }

  getKitSnapshotRuns = async (plantCode: string, sort: SortEnumType, first: number = 5) => {
    const result = await this.client.query<KitSnapshotRunsQuery, KitSnapshotRunsQueryVariables>({
      query: KIT_SNAPSHOT_RUNS,
      variables: {
        plantCode,
        first,
        sort
      },
      fetchPolicy: 'network-only'
    })

    return result.data.kitSnapshotRuns
  }

  getLatestKitSnaphotRun = async (plantCode: string) => {
    const result = await this.client.query<LatestKitSnapshotRunQuery, LatestKitSnapshotRunQueryVariables>({
      query: LATEST_KIT_SNAPSHOT_RUN,
      variables: {
        plantCode
      },
      fetchPolicy: 'network-only'
    })

    return result.data.kitSnapshotRuns.nodes.length > 0
      ? result.data.kitSnapshotRuns.nodes[0]
      : null
  }

  getPartnerStatusFilePayload = async (input: { plantCode: string, sequence: number }) => {
    const result = await this.client.query<PartnerStatusFilePayloadQuery, PartnerStatusFilePayloadQueryVariables>({
      query: PARTNER_STATUS_FILE_PAYLOAD,
      variables: {
        plantCode: input.plantCode,
        sequence: input.sequence
      },
      fetchPolicy: 'network-only'
    })
    return result.data.partnerStatusFilePayload
  }

  genPartnerStatusFilename = async (id: string) => {
    const result = await this.client.query<GenPartnerStatusFilenameQuery, GenPartnerStatusFilenameQueryVariables>({
      query: GEN_PARTNER_STATUS_FILENAME,
      variables: {
        id
      }
    })
    return result.data.genPartnerStatusFilename
  }

  parseBomFile = async (text: string) => {
    const result = await this.client.query<ParseBomFileQuery, ParseBomFileQueryVariables>({
      query: PARSE_BOM_FILE,
      variables: {
        text
      }
    })
    return result.data.parseBomFile
  }

  parseShipFile = async (text: string) => {
    const result = await this.client.query<ParseShipFileQuery, ParseShipFileQueryVariables>({
      query: PARSE_SHIP_FILE,
      variables: {
        text
      },
    })
    return result.data.parseShipFile
  }

  parseVinFile = async (text: string) => {
    const result = await this.client.query<ParseVinFileQuery, ParseVinFileQueryVariables>({
      query: PARSE_VIN_FILE,
      variables: {
        text
      },
    })
    return result.data.parseVinFile
  }

  genVinImportAck = async (plantCode: string, sequence: number) => {
    const result = await this.client.query<GenVinImportAckQuery, GenVinImportAckQueryVariables>({
      query: GEN_VIN_IMPORT_ACK,
      variables: {
        plantCode,
        sequence
      },
    })
    return result.data.genVinImportAcknowledgment
  }

  parsePartnerStatusAckFile = async (text: string) => {
    const result = await this.client.query<ParsePartnerStatusAckQuery, ParsePartnerStatusAckQueryVariables>({
      query: PARSE_PARTNER_STATUS_ACK,
      variables: {
        text
      },
    })
    return result.data.parsePartnerStatusAckFile
  }

  getFordInerfaceFileType = async (filename: string) => {
    const result = await this.client.query<FordInterfaceFileTypeQuery, FordInterfaceFileTypeQueryVariables>({
      query: FORD_INTERFACE_FILETYPE,
      variables: {
        filename
      }
    })
    return result.data.fordInterfaceFileType
  }
}


