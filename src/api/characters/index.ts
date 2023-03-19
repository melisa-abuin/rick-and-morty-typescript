import { gql } from '@apollo/client'

const LocationFields = gql`
  fragment LocationFields on Location {
    dimension
    name
    residents {
      id
    }
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
        episodes: episode {
          id
          name
        }
        gender
        location {
          ...LocationFields
        }
        id
        image
        name
        origin {
          ...LocationFields
        }
        species
        status
      }
    }
  }
`
