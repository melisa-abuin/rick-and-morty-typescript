import { EpisodeList } from '..'
import { render, screen } from '@testing-library/react'
import { episodesMock } from '@/mocks/episodes'

describe('EpisodeList', () => {
  it('renders elements correctly', () => {
    render(<EpisodeList episodes={episodesMock} />)

    expect(screen.getByText('ep 1')).toBeInTheDocument()

    expect(screen.getByText('ep 2')).toBeInTheDocument()
  })
})
