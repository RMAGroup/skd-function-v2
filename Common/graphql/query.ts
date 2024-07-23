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




