import { Episode } from '@/interfaces/episode'
import { Text } from './styles'

interface Props {
  episodes: Episode[]
}

export const EpisodeList = ({ episodes }: Props) => (
  <>
    {episodes.map(({ id, name }) => (
      <Text key={id}>{name}</Text>
    ))}
  </>
)
