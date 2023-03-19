import { NextButton } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentProps } from 'react'

const defaultProps = {
  currentPage: 1,
  handlePageChange: jest.fn(),
  totalPages: 5,
}

const mount = ({
  currentPage,
  handlePageChange,
  totalPages,
}: ComponentProps<typeof NextButton> = defaultProps) => {
  return render(
    <NextButton
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      totalPages={totalPages}
    />
  )
}

describe('NextButton', () => {
  it('renders the next button if the current page is still below the number of total pages', () => {
    mount()

    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('renders null if the current page is the last one', () => {
    mount({ ...defaultProps, currentPage: 4 })

    expect(screen.queryByText('Next')).not.toBeInTheDocument()
  })

  it('calls on click function correctly', async () => {
    const handlePageChange = jest.fn()
    mount({ ...defaultProps, handlePageChange })

    userEvent.click(screen.getByText('Next'))

    await waitFor(() => {
      expect(handlePageChange).toHaveBeenCalled()
    })
  })
})
