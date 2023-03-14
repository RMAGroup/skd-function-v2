import gql from 'graphql-tag'

export const IMPORT_BOM = gql`
mutation importBom($input:BomFileInput!) { 
  importBom(input: $input) {
    payload {
      id
      sequence
      plantCode
      lotNumbers
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

export const IMPORT_PARTNER_STATUS_ACK = gql`
mutation importPartnerStatusAck($input: PartnerStatusAckDTOInput!) {
  importPartnerStatusAck(input: $input) {
    payload {
      id
      fileDate
      totalProcessed
      totalAccepted
      totalRejected
      kitSnapshotRun {
        plantId
        plant {
          code
        }
        sequence
      }
    }
    errors {
      message
    }
  }
}

`

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

export const GENERATE_KIT_SNAPSHOT_RUN = gql`
mutation generateKitSnapshotRun($input:KitSnapshotInput!) {
  generateKitSnapshotRun(input: $input) {
    payload {
      plantCode
      runDate
      snapshotCount
      sequence
    }
		errors {
      path
      message
    }
  }
}
`

export const KIT_SNAPSHOT_RUN_BY_SEQUENCE = gql`
query kitSnapshotRunBySequence($plantCode: String!, $sequence: Int!){
  kitSnapshotRuns(first:1
  where:{
    plant:{ code:{ eq: $plantCode } }
    sequence: { eq: $sequence }
  }
  ) {
    nodes {
      id
      sequence
      runDate
      createdAt
      removedAt
      plant {
        code
        partnerPlantCode
        partnerPlantType
      }
    }
  }
}

`

export let KIT_SNAPSHOT_RUNS = gql`
query kitSnapshotRuns($plantCode: String!, $first: Int!, $sort: SortEnumType!){
  kitSnapshotRuns(first: $first,
  order: {
    sequence: $sort
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
      removedAt
      plant {
        code
        partnerPlantCode
        partnerPlantType
      }
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

export const PARSE_PARTNER_STATUS_ACK = gql`
query parsePartnerStatusAck($text: String!) {
  parsePartnerStatusAckFile(text:$text) {
    plantCode
    partnerPlantCode
    sequence
    totalProcessed
    totalAccepted
    totalRejected
    fileDate
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