import { Column, Subtitle, Title } from './styles'

interface Props {
  title: string
  subtitle?: string
}

export const CharacterInfo = ({ title, subtitle }: Props) => (
  <Column>
    <Title>{title}</Title>
    <Subtitle>{subtitle ?? '--'}</Subtitle>
  </Column>
)
