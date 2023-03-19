import { NextButton } from './components/nextButton'
import { PrevButton } from './components/prevButton'
import { Container, PageNumber, Pages } from './styles'
import { slicePagesArray } from './utils/slicePagesArray'

interface Props {
  currentPage: number
  onPageChange: (pageNumber: number) => void
  totalPages: number
}

export const Paginator = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pagesList = Array.from({ length: totalPages }, (_, i) => i)

  const pagesToShow = slicePagesArray(pagesList, currentPage)

  const handlePageChange = (pageNumber: number) => onPageChange(pageNumber)

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
            {page + 1}
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
