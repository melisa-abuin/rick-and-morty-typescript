import { LoaderCard, LoadersContainer, LoaderImage } from './styles'

interface Props {
  cardsNumber: number
}

export const Loader = ({ cardsNumber }: Props) => {
  const loadersToShow = Array.from({ length: cardsNumber }, (_, i) => i)

  return (
    <LoadersContainer>
      {loadersToShow.map((item) => (
        <LoaderCard key={item}>
          <LoaderImage alt="loader" fill src="/card-loader.gif" />
        </LoaderCard>
      ))}
    </LoadersContainer>
  )
}
