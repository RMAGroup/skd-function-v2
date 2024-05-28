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
      lotCount
    }
    errors {
      code
      description
    }
  }
}
`

export const IMPORT_SHIPMENT_FILE_TEXT = gql`
mutation importShipmentFileText($filename: String!, $text: String!){
  importShipmentFileText(filename: $filename, text: $text) {
    payload {
      shipmentId
      plantCode
      sequence
      lotCount
    }
    errors {
      code
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

export const PARSE_SHIP_FILE = gql`
mutation parseShipmentFile($file: Upload!) {
  parseShipmentFile(file: $file) {
    sequence
    plantCode
    created
    filename
    lots {
      lotNo
      invoices {
        invoiceNo
        shipDate
        parts {
          partNo
          handlingUnitCode
          customerPartNo
          customerPartDesc
          quantity
        }
      }
    }
  }
}
`

export const PARSE_SHIP_FILE_TEXT = gql`
mutation parseShipmentFileText($filename: String!, $text: String!) {
  parseShipmentFileText(filename: $filename, text: $text) {
    sequence
    plantCode
    created
    filename
    lots {
      lotNo
      invoices {
        invoiceNo
        shipDate
        parts {
          partNo
          handlingUnitCode
          customerPartNo
          customerPartDesc
          quantity
        }
      }
    }
  }
}
`


export const UPDATE_PARTNER_STATUS = gql`
mutation updatePartnerStatus($input: UpdatePartnerStatusInput!) {
  updatePartnerStatus(input: $input) {
    payload {
      kitNo
      updatedStatuses
    }
    errors {
      code
      description
    }
  }
}
`

export const SYNC_KIT_STATUS_TO_PARTNER_STATUS = gql`
mutation syncKitStatusToPartnerStatus($input: UpdatePartnerStatusInput!) {
  syncKitToPartnerStatus(input: $input) {
    payload {
      kitNo
      updatedStatuses
    }
    errors {
      code
      description
    }
  }
}
`

export const CREATE_BUILD_START_EVENT = gql`

mutation createBuildStartEvent($kitNo: String!) {
  createBuildStartEvent(kitNo: $kitNo) {
    payload {
      id
      kitId
      eventDate
    }
    errors {
      code
      description
    }
  }
}

`

export const UPDATE_KIT_VIN = gql`
mutation updateKitVin($input: UpdateKitVinInput!) {
  updateKitVin(input: $input) {
    payload {
      vin
      kitNo
    }
    errors {
      code
      description
    }
  }
}
`
