import { Episode } from '../episode'
import { Location } from '../location'

export interface Character {
  id: number
  image: string
  name: string
  species: string
  gender: string
  status: string
  location: Location
  origin: Location
  episode: Episode[]
}

export interface CharacterModel {
  characters: {
    info: {
      count: number
      pages: number
    }
    results: Character[]
  }
}
