import { Episode } from '../episode'
import { Location } from '../location'

export interface Character {
  episodes: Episode[]
  gender: string
  id: number
  image: string
  location: Location
  name: string
  origin: Location
  species: string
  status: string
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
