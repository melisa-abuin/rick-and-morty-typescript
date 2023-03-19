import { CharacterInfo } from '../characterInfo'
import { Location } from '@/interfaces/location'

interface Props {
  location: Location
}

export const LocationInfo = ({ location }: Props) => (
  <>
    <CharacterInfo title="dimension" subtitle={location.dimension} />

    <CharacterInfo title="name" subtitle={location.name} />

    <CharacterInfo
      title="ammount of residents"
      subtitle={location.residents?.length.toString()}
    />
  </>
)
