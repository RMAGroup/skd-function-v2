import  gql  from 'graphql-tag'

export const IMPORT_BOM = gql`
mutation importBom($input:BomFileInput!) { 
  importBom(input: $input) {
    payload {
      id
      sequence
      plantCode
      lotCount
      partCount
      vehicleCount
      createdAt
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
export const IMPORT_VIN = gql`
mutation importVIN($input: VinFileInput!) {
  importVIN(input: $input) {
     payload {
      sequence
      plant {
        code
      }
      partnerPlantCode
      kitVins {
        kit {
          kitNo
          lot {
            lotNo
          }
        }
        vin
      }
    }
    errors {
      path
      message
    }
  }
}
`

export const PLANTS = gql`
query plants {
  plants {
      code
      partnerPlantCode
      partnerPlantType
      name
      createdAt
  }
}
`

export const GENERATE_KIT_SNAPSHOT_RUN = gql`
mutation generateKitSnapshotRun($input:KitSnapshotInput!) {
  generateKitSnapshotRun(input: $input) {
    payload {
      plantCode
      runDate
      snapshotCount
    }
		errors {
      path
      message
    }
  }
}
`

export const KIT_SNAPSHOT_RUN = gql`

query kitSnapshotRun($plantCode: String!, $sequence: Int!) {
  kitSnapshotRun(plantCode: $plantCode, sequence: $sequence) {
    sequence
    runDate
    plantCode
    entries {
      txType
      currentTimeLineCode
      lotNo
      kitNo
      vIN
      dealerCode
      engineSerialNumber
      customReceived
      planBuild
      buildCompleted
      gateRelease
      wholesale
      originalPlanBuild
    }
  }
}
`

export let LATEST_KIT_SNAPSHOT_RUN = gql`
query latestKitSnapshotRun($plantCode: String!){
  kitSnapshotRuns(first:1,order: {
    runDate: DESC
  }
  where:{
    plant:{
      code:{
        eq: $plantCode
      }
    }
  }
  ) {
    nodes {
      id
      sequence
      runDate
      createdAt
      plant {
        code
        partnerPlantCode
        partnerPlantType
      }
    }
  }
}
`

export const PARTNER_STATUS_FILE_PAYLOAD = gql`
query partnerStatusFilePayload($plantCode: String!, $sequence:Int!){
  partnerStatusFilePayload(plantCode:$plantCode, sequence:$sequence) {
    plantCode
    runDate
    sequence
    filename
    errorMessage
    payloadText
  }
}
`

export const GEN_PARTNER_STATUS_FILENAME = gql`
query genPartnerStatusFilename($id: UUID!){
  genPartnerStatusFilename(kitSnapshotRunId: $id) 
}
`

export const PARSE_BOM_FILE = gql`
query parseBomFile($text:String!) {
  parseBomFile(text: $text) {
    plantCode
    sequence
    bomFileCreatedAt
    lotEntries {
      lotNo
      kits {
        kitNo
        modelCode
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

export const PARSE_SHIP_FILE  = gql`
query parseShipFile($text: String!) {
  parseShipFile(text: $text) {
    sequence
    plantCode
    created
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

export const PARSE_VIN_FILE = gql`
query parseVinFile($text:String!) {
  parseVinFile(text: $text) {
    plantCode
    partnerPlantCode
    sequence
    kits {
      lotNo
      kitNo
      vin
    }
  }
}
`

export const GEN_VIN_IMPORT_ACK = gql`
query genVinImportAck($plantCode: String!, $sequence: Int!) {
  genVinImportAcknowledgment(plantCode: $plantCode, sequence: $sequence) {
    plantCode
    sequence
    filename
    payloadText
    errorMessage
  }
}
`

export const FORD_INTERFACE_FILETYPE = gql`
query fordInterfaceFileType($filename: String!) {
  fordInterfaceFileType(filename: $filename) 
}
`