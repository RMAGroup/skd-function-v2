//#region Imports
import {
  ImportShipmentMutation,
  ImportShipmentMutationVariables,
  PlantsQuery,
  PlantsQueryVariables,
  ImoprtBomMutation,
  ImoprtBomMutationVariables,
  ParseShipmentFileMutation,
  ParseShipmentFileMutationVariables,
  ParseBomFileMutation,
  ParseBomFileMutationVariables,
  ParseBomFileTextMutation,
  ParseBomFileTextMutationVariables,
  ImportBomFileTextMutation,
  ImportBomFileTextMutationVariables,
  ImportShipmentFileTextMutation,
  ImportShipmentFileTextMutationVariables,
  ParseShipmentFileTextMutation,
  ParseShipmentFileTextMutationVariables,
} from './graphql/generated/graphql';

import { IMPORT_BOM, IMPORT_BOM_FILE_TEXT, IMPORT_SHIPMENT, IMPORT_SHIPMENT_FILE_TEXT, PARSE_BOM_FILE, PARSE_BOM_FILE_TEXT, PARSE_SHIP_FILE, PARSE_SHIP_FILE_TEXT } from './graphql/mutation';

import {
  PLANTS,
} from './graphql/query';
import { Client, createClient, dedupExchange, fetchExchange } from '@urql/core';
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


}


