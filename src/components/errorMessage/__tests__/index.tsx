import { ErrorMessage } from '..'
import { render, screen } from '@testing-library/react'

describe('ErrorMessage', () => {
  it('renders text correctly', () => {
    render(<ErrorMessage />)

    expect(
      screen.getByText('Ups! Something when wrong. Please try again later.')
    ).toBeInTheDocument()
  })
})
