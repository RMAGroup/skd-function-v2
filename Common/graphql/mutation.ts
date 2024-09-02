import gql from 'graphql-tag'

export const IMPORT_BOM = gql`
mutation imoprtBom($file: Upload!) {
  importBOM(file: $file) {
    payload {
      bomId
      plantCode
      sequence
    }
    errors { description }
  }
}
`

export const IMPORT_BOM_FILE_TEXT = gql`
mutation importBOMFileText($filename: String!, $text: String!) {
  importBOMFileText(filename: $filename, text: $text) {
    payload {
      bomId
      plantCode
      sequence
    }
    errors { description }
  }
}
`


export const IMPORT_SHIPMENT = gql`
mutation importShipment($file: Upload!){
  importShipment(file: $file) {
    payload {
      shipmentId
      plantCode
      sequence
      lotNos
    }
    errors {
      code
      description
    }
  }
}
`

export const IMPORT_SHIPMENT_FILE_TEXT = gql`
mutation importShipmentFileText($fileName: String!, $fileText: String!){
  importShipmentText(fileName: $fileName, fileText: $fileText) {
    payload {
      shipmentId
      plantCode
      sequence
      lotNos
    }
    errors {
      description
    }
  }
}
`

export const PARSE_BOM_FILE = gql`
mutation parseBomFile($file: Upload!) {
  parseBomFile(file: $file) {
    payload {
      plantCode
      filename
      sequenceNumber
      kittingPlantCode
      lots {
        lotNo
      }
    }
    errors {
      description
    }
    isSuccess
  }
}
`

export const PARSE_BOM_FILE_TEXT = gql`
mutation parseBomFileText($filename: String!, $text: String!) {
  parseBomFileText(filename: $filename, text: $text) {
    isFailure
    isSuccess
    errors {
      description
    }
    payload {
      bomFileCreatedAt
      filename
      kittingPlantCode
      plantCode
      sequenceNumber
      lots {
        lotNo
      }
    }
    isSuccess
  }
}
`






