import gql from 'graphql-tag'

export const PLANTS = gql`
query plants {
  plants {
    nodes {
      code
      partnerPlantCode
      partnerPlantType
      name
      createdAt
    }
  }
}
`


export const PARSE_BOM_FILE = gql`
query parseBomFile($text:String!) {
  parseBomFile(text: $text) {
    plantCode
    sequence
    bomFileCreatedAt
    filename
    lotEntries {
      lotNo
      kits {
        kitNo
        pcvCode
      }
    }
    lotParts {
      lotNo
      partNo
      partDesc
      quantity
    }
  }
}
`

export const PARSE_SHIP_FILE = gql`
query parseShipFile($text: String!) {
  parseShipFile(text: $text) {
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

export const FORD_INTERFACE_FILETYPE = gql`
query fordInterfaceFileType($filename: String!) {
  fordInterfaceFileType(filename: $filename) 
}
`

export const BUILD_START_PENDING_KITS = gql`
query buildStartPendingKits($plantCode: String!) {
  buildStartPendingKits(plantCode: $plantCode) {
    id
    kitNo
    lotNo
    vin
    model
    series
    kitTimelineCode
    partnerStatusCode
  }
}
`

export const UPDATE_PARTNER_STATUS_PENDING_KITS = gql`
query updatePartnerStatusPendingKits($plantCode: String!){
  updatePartnerStatusPendingKits(plantCode: $plantCode) {
    kitNo
    lotNo
    vin
    model
    series
    eventDtate
    partnerStatusCode
    kitTimelineCode
    partnerStatusPending  
  }
}

`

export const PLAN_BUILD_VIN_PENDING_KITS = gql`
query planBuildVinPendingKits($plantCode: String!) {
  planBuildVinPendingKits(plantCode: $plantCode) {
    id
    kitNo
    lotNo
    vin
    model
    series
    kitTimelineCode
    partnerStatusCode
    partnerStatusPending
  }
}
`