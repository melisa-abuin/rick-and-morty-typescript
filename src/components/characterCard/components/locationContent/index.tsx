import { TitleDescriptionBlock } from '../titleDescriptionBlock'
import { Location } from '@/interfaces/location'

interface Props {
  location: Location
}

export const LocationContent = ({ location }: Props) => (
  <>
    <TitleDescriptionBlock title="dimension" description={location.dimension} />

    <TitleDescriptionBlock title="name" description={location.name} />

    <TitleDescriptionBlock
      title="ammount of residents"
      description={location.residents?.length.toString()}
    />
  </>
)
