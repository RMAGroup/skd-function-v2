import gql from 'graphql-tag'

export const IMPORT_BOM = gql`
mutation imoprtBom($file: Upload!) {
  importBOM(file: $file) {
    payload {
      items {
        bomId
        plantCode
        sequence
      }
    }
    errors { message }
  }
}
`

export const IMPORT_SHIPMENT = gql`
mutation importShipment($file: Upload!){
  importShipment(file: $file) {
    payload {
      id
      plantCode
      sequence
      invoiceCount
      lotCount
      partCount
    }
    errors {
      path
      message
    }
  }
}
`

export const PARSE_BOM_FILE = gql`
mutation parseBomFile($file: Upload!) {
  parseBomFile(file: $file) {
    bomPlantSets {
      plantCode
      filename
      sequenceNumber
      kittingPlantCode
      lots {
        lotNo
        pcvCode
        lotParts {
          partNo
          partDesc
          quantity
        }
        kits {
          kitNo
        }
      }
    }
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

export const UPDATE_PARTNER_STATUS = gql`
mutation updatePartnerStatus($input: UpdatePartnerStatusInput!) {
  updatePartnerStatus(input: $input) {
    payload {
      kitNo
      updatedStatuses
    }
    errors {
      message
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
      message
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
      message
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
      message 
    }
  }
}
`
