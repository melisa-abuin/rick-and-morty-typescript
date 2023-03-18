import { useCharacters } from '@/hooks/useCharacters'
import { Layout } from '@/components/layout'
import { ErrorMessage } from '@/components/errorMessage'
import { Loader } from '@/components/loader'

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

  return null
}

export default Home
