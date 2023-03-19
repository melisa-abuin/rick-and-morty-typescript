import { PrevButton } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentProps } from 'react'

const defaultProps = {
  currentPage: 2,
  handlePageChange: jest.fn(),
}

const mount = ({
  currentPage,
  handlePageChange,
}: ComponentProps<typeof PrevButton> = defaultProps) => {
  return render(
    <PrevButton currentPage={currentPage} handlePageChange={handlePageChange} />
  )
}

describe('PrevButton', () => {
  it('renders the next button if the current page is not the first one', () => {
    mount()

    expect(screen.getByText('Prev')).toBeInTheDocument()
  })

  it('renders null if the current page is the first one', () => {
    mount({ ...defaultProps, currentPage: 0 })

    expect(screen.queryByText('Prev')).not.toBeInTheDocument()
  })

  it('calls on click function correctly', async () => {
    const handlePageChange = jest.fn()
    mount({ ...defaultProps, handlePageChange })

    userEvent.click(screen.getByText('Prev'))

    await waitFor(() => {
      expect(handlePageChange).toHaveBeenCalled()
    })
  })
})
