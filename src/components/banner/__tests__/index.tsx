import { Banner } from '..'
import { render, screen } from '@testing-library/react'

describe('Banner', () => {
  it('renders elements correctly', () => {
    render(<Banner />)

    expect(screen.getByText('Rick and Morty')).toBeInTheDocument()

    expect(screen.getByAltText('banner')).toBeInTheDocument()
  })
})
