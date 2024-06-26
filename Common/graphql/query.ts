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



