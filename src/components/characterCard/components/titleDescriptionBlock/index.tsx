import { Column, Description, Title } from './styles'

interface Props {
  title: string
  description?: string
}

export const TitleDescriptionBlock = ({ title, description }: Props) => (
  <Column>
    <Title>{title}</Title>
    <Description>{description ?? '--'}</Description>
  </Column>
)
