import { useCharacters } from '@/hooks/useCharacters'
import { Layout } from '@/components/layout'
import { ErrorMessage } from '@/components/errorMessage'
import { Loader } from '@/components/loader'
import { CharacterCard } from '@/components/characterCard'
import { Paginator } from '@/components/paginator'
import { useState } from 'react'
import { numberOfElementsToShow } from '@/constants'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, loading } = useCharacters(currentPage)

  if (loading) {
    return (
      <Layout>
        <Loader cardsNumber={numberOfElementsToShow} />
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

  if (data) {
    return (
      <Layout>
        {data.characters.results.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
        <Paginator
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={data.characters.info.pages}
        />
      </Layout>
    )
  }

  return null
}

export default Home
