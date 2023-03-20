import { visiblePagesAmount } from '../../constants'

const visiblePagesOffsetFromCurrentPage = Math.floor(visiblePagesAmount / 2)

export const slicePagesArray = (
  allPagesArray: Array<number>,
  currentPage: number
) => {
  if (allPagesArray.length <= visiblePagesAmount) {
    return allPagesArray
  }

  let startIndex = currentPage - visiblePagesOffsetFromCurrentPage - 1
  let endIndex = currentPage + visiblePagesOffsetFromCurrentPage

  if (startIndex < 0) {
    endIndex -= startIndex
    startIndex = 0
  } else if (endIndex > allPagesArray.length) {
    startIndex -= endIndex - allPagesArray.length
    endIndex = allPagesArray.length
  }

  return allPagesArray.slice(startIndex, endIndex)
}
