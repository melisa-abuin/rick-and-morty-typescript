import { LoaderCard, LoadersContainer, LoaderImage } from './styles'

interface Props {
  cardsNumber: number
}

export const Loader = ({ cardsNumber }: Props) => {
  const loaderCardsToShow = Array.from({ length: cardsNumber }, (_, i) => i)

  return (
    <LoadersContainer>
      {loaderCardsToShow.map((card) => (
        <LoaderCard key={card}>
          <LoaderImage
            alt="loader"
            fill
            src="/card-loader.gif"
            sizes="(max-width: 1200px) 480px"
          />
        </LoaderCard>
      ))}
    </LoadersContainer>
  )
}
