import { GetCharacters } from '@/api/characters'
import { CharacterModel } from '@/interfaces/character'
import { useQuery } from '@apollo/client'

export const useCharacters = () =>
  useQuery<CharacterModel>(GetCharacters, {
    variables: { page: 0 },
  })
