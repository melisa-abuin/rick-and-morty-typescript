import { gql } from '@apollo/client'

const LocationFields = gql`
  fragment LocationFields on Location {
    name
    type
    dimension
  }
`

export const GetCharacters = gql`
  ${LocationFields}
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        image
        name
        species
        gender
        status
        episode {
          name
        }
        location {
          ...LocationFields
        }
        origin {
          ...LocationFields
        }
      }
    }
  }
`
