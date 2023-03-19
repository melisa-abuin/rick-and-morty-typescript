import { Button } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('renders the text correctly', () => {
    render(<Button onClick={jest.fn()}>hello</Button>)

    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('calls on click function correctly', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>hello</Button>)

    userEvent.click(screen.getByText('hello'))

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
    })
  })
})
