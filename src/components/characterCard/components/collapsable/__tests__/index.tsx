import { Collapsable } from '..'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Collapsable', () => {
  it('renders elements correctly', () => {
    const title = 'Location'
    render(<Collapsable title={title}>hello</Collapsable>)

    expect(screen.getByText(title)).toBeInTheDocument()

    expect(screen.getByAltText('collapse')).toBeInTheDocument()
  })

  it('shows info of location when dropdown is open', async () => {
    const title = 'Location'
    render(<Collapsable title={title}>hello</Collapsable>)

    expect(screen.queryByText('hello')).not.toBeInTheDocument()

    userEvent.click(screen.getByText(title))

    await waitFor(() => {
      expect(screen.queryByText('hello')).toBeInTheDocument()
    })
  })
})
