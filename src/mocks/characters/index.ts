import { Character } from '@/interfaces/character'
import { locationMock } from '../locations'

export const charactersMock: Character[] = [
  {
    episodes: [
      {
        id: 1,
        name: 'episode name',
      },
    ],
    gender: 'gender mock',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: locationMock,
    name: 'name mock',
    origin: locationMock,
    species: 'species mock',
    status: 'status mock',
  },
  {
    episodes: [
      {
        id: 1,
        name: 'episode name',
      },
    ],
    gender: 'second gender mock',
    id: 2,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: locationMock,
    name: 'second name mock',
    origin: locationMock,
    species: 'second species mock',
    status: 'second status mock',
  },
]
