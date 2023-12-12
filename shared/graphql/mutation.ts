import gql from 'graphql-tag'

export const IMPORT_BOM = gql`
mutation importBom($input:BomFileInput!) { 
  importBom(input: $input) {
    payload {
      bomId
    }
    errors {
      path
      message
    }
  }
}
`

export const IMPORT_SHIPMENT = gql`
mutation importShipment($input: ShipFileInput!){
  importShipment(input:$input) {
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
