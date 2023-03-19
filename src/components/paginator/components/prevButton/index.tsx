import { Button } from '@/components/button'

interface Props {
  currentPage: number
  handlePageChange: (newPage: number) => void
}

export const PrevButton = ({ currentPage, handlePageChange }: Props) => {
  const onClick = () => handlePageChange(currentPage - 1)

  if (currentPage < 1) {
    return null
  }

  return <Button onClick={onClick}>Prev</Button>
}
