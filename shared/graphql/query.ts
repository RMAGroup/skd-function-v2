import gql from 'graphql-tag'

export const PLANTS = gql`
query plants {
  plants {
    nodes {
      code      
      name
      kittingPlantCode
      createdAt
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
    kitStatusCode
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
    kitStatusCode
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
    kitStatusCode
    partnerStatusCode
    partnerStatusPending
  }
}
`