import { TitleDescriptionBlock } from '..'
import { render, screen } from '@testing-library/react'

describe('TitleDescriptionBlock', () => {
  it('renders info correctly', () => {
    const title = 'title'
    const description = 'description'
    render(<TitleDescriptionBlock description={description} title={title} />)

    expect(screen.getByText('title')).toBeInTheDocument()

    expect(screen.getByText('description')).toBeInTheDocument()
  })
})
