import { Character } from '@/interfaces/character'
import { locationMock } from '../locations'

export const charactersMock: Character[] = [
  {
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'name mock',
    species: 'species mock',
    gender: 'gender mock',
    status: 'status mock',
    location: locationMock,
    origin: locationMock,
    episode: [
      {
        name: 'episode name',
      },
    ],
  },
  {
    id: 2,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'second name mock',
    species: 'second species mock',
    gender: 'second gender mock',
    status: 'second status mock',
    location: locationMock,
    origin: locationMock,
    episode: [
      {
        name: 'episode name',
      },
    ],
  },
]
