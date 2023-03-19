import { visiblePagesAmount } from '../../constants'

export const slicePagesArray = (
  allPagesArray: Array<number>,
  currentPage: number
) => {
  if (allPagesArray.length <= visiblePagesAmount) {
    return allPagesArray
  }

  let startIndex = currentPage - 2
  let endIndex = currentPage + 3

  if (startIndex < 0) {
    endIndex -= startIndex
    startIndex = 0
  } else if (endIndex > allPagesArray.length) {
    startIndex -= endIndex - allPagesArray.length
    endIndex = allPagesArray.length
  }

  return allPagesArray.slice(startIndex, endIndex)
}
