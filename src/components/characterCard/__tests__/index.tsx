import { render, screen } from '@testing-library/react'
import { charactersMock } from '@/mocks/characters'
import { CharacterCard } from '..'

describe('CharacterCard', () => {
  it('renders elements correctly', () => {
    render(<CharacterCard {...charactersMock[0]} />)

    expect(screen.getByText('name mock')).toBeInTheDocument()

    expect(screen.getByAltText('avatar')).toBeInTheDocument()
  })
})
