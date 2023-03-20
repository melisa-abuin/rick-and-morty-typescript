import { slicePagesArray } from '..'

const testPages = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('slicePagesArray', () => {
  it('returns a 5 length array if the current page is the first one', () => {
    const pages = slicePagesArray(testPages, 1)

    expect(pages).toStrictEqual([1, 2, 3, 4, 5])
  })

  it('returns a 5 length array if the current page is the last one', () => {
    const pages = slicePagesArray(testPages, 9)

    expect(pages).toStrictEqual([5, 6, 7, 8, 9])
  })

  it('returns a 5 length array if the current page is in the middle of the array', () => {
    const pages = slicePagesArray(testPages, 4)

    expect(pages).toStrictEqual([2, 3, 4, 5, 6])
  })

  it('returns the default array of pages if the amount of pages is lower than 5', () => {
    const shortTestPages = [1, 2, 3]
    const pages = slicePagesArray(shortTestPages, 1)

    expect(pages).toStrictEqual([1, 2, 3])
  })
})
