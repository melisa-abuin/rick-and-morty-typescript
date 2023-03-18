import { Loader } from '..'
import { render, screen } from '@testing-library/react'

describe('Loader', () => {
  it('renders text correctly', () => {
    render(<Loader cardsNumber={2} />)

    expect(screen.getAllByAltText('loader')).toHaveLength(2)
  })
})
