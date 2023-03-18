import { GetCharacters } from '@/api/characters'
import { charactersMock } from '@/mocks/characters'
import { ApolloError } from '@apollo/client'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { renderHook, waitFor } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { useCharacters } from '..'

const defaultMocks = [
  {
    request: {
      query: GetCharacters,
      variables: {
        page: 0,
      },
    },
    result: {
      data: {
        characters: {
          results: charactersMock,
          info: {
            count: 2,
            pages: 1,
          },
        },
      },
    },
  },
]

const errorMock = [
  {
    request: {
      query: GetCharacters,
      variables: {
        page: 0,
      },
    },
    error: new Error('dummy error'),
  },
]

const renderHookWithWrapper = (mocks: MockedResponse[] = defaultMocks) => {
  const wrapper = ({ children }: PropsWithChildren) => (
    <MockedProvider mocks={mocks}>{children}</MockedProvider>
  )
  return renderHook(() => useCharacters(), {
    wrapper,
  })
}

describe('useCharacters', () => {
  it('returns a loading state', () => {
    const { result } = renderHookWithWrapper()

    expect(result.current.loading).toBe(true)
  })

  it('returns an array with the characters info', async () => {
    const { result } = renderHookWithWrapper()

    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data?.characters.results).toHaveLength(2)
  })

  it('returns an error when the query was not successful', async () => {
    const { result } = renderHookWithWrapper(errorMock)

    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toStrictEqual(
      new ApolloError({ errorMessage: 'dummy error' })
    )
  })
})
