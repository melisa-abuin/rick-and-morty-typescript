import { CharacterInfo } from '..'
import { render, screen } from '@testing-library/react'

describe('CharacterInfo', () => {
  it('renders info correctly', () => {
    const title = 'title'
    const subtitle = 'subtitle'
    render(<CharacterInfo subtitle={subtitle} title={title} />)

    expect(screen.getByText('title')).toBeInTheDocument()

    expect(screen.getByText('subtitle')).toBeInTheDocument()
  })
})
