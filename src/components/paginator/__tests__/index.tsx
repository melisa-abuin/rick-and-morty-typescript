import { Paginator } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import { ComponentProps } from 'react'
import userEvent from '@testing-library/user-event'

const defaultProps = {
  currentPage: 1,
  onPageChange: jest.fn(),
  totalPages: 5,
}

const mount = ({
  currentPage,
  onPageChange,
  totalPages,
}: ComponentProps<typeof Paginator> = defaultProps) => {
  return render(
    <Paginator
      currentPage={currentPage}
      onPageChange={onPageChange}
      totalPages={totalPages}
    />
  )
}

describe('Paginator', () => {
  it('changes current page by clicking a number', async () => {
    const onPageChange = jest.fn()
    mount({ ...defaultProps, onPageChange })

    userEvent.click(screen.getByText('2'))

    await waitFor(() => {
      expect(onPageChange).toHaveBeenCalledWith(2)
    })
  })

  it('changes current page by clicking the next button', async () => {
    const onPageChange = jest.fn()
    const currentPage = 2
    mount({ ...defaultProps, onPageChange, currentPage })

    userEvent.click(screen.getByText('Next'))

    await waitFor(() => {
      expect(onPageChange).toHaveBeenCalledWith(currentPage + 1)
    })
  })
})
