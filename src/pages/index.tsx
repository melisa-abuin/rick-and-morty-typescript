import { useCharacters } from '@/hooks/useCharacters'
import { Layout } from '@/components/layout'
import { ErrorMessage } from '@/components/errorMessage'
import { Loader } from '@/components/loader'
import { CharacterCard } from '@/components/characterCard'

const Home = () => {
  const { data, error, loading } = useCharacters()

  if (loading) {
    return (
      <Layout>
        <Loader cardsNumber={10} />
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <ErrorMessage />
      </Layout>
    )
  }

  return (
    <Layout>
      {data?.characters.results.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </Layout>
  )
}

export default Home
