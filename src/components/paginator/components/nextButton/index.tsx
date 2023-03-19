import { Button } from '@/components/button'

interface Props {
  currentPage: number
  handlePageChange: (newPage: number) => void
  totalPages: number
}

export const NextButton = ({
  currentPage,
  handlePageChange,
  totalPages,
}: Props) => {
  const onClick = () => handlePageChange(currentPage + 1)

  if (currentPage >= totalPages) {
    return null
  }

  return <Button onClick={onClick}>Next</Button>
}
