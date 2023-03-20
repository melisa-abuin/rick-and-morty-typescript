import { NextButton } from './components/nextButton'
import { PrevButton } from './components/prevButton'
import { Container, PageNumber, Pages } from './styles'
import { slicePagesArray } from './utils/slicePagesArray'

interface Props {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  totalPages: number
}

export const Paginator = ({ currentPage, onPageChange, totalPages }: Props) => {
  const pagesList = Array.from({ length: totalPages }, (_, i) => i + 1)

  const pagesToShow = slicePagesArray(pagesList, currentPage)

  const handlePageChange = (pageNumber: number) => {
    window.scrollTo(0, 0)
    onPageChange(pageNumber)
  }

  return (
    <Container>
      <PrevButton
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <Pages>
        {pagesToShow.map((page) => (
          <PageNumber
            key={page}
            isSelected={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PageNumber>
        ))}
      </Pages>

      <NextButton
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </Container>
  )
}
