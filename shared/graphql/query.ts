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