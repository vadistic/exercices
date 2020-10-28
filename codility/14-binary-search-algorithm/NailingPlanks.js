/**
 *
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 *
 * @returns {number}
 */
function solution(A, B, C) {
  // sort nails and remeber their indexes
  /**
   * @type {[number,number][]}
   */
  const nails = C.map((val, i) => {
    return [val, i]
  })

  nails.sort(([valA], [valB]) => valA - valB) // asc

  let maxIndex = -1

  for (let i = 0; i < A.length; i++) {
    const start = A[i]
    const end = B[i]
    // for each plank find the nail (index) that can nail it

    const nailIndex = findNailIndex(start, end, nails, maxIndex)

    if (nailIndex === -1) return -1

    maxIndex = Math.max(maxIndex, nailIndex)
  }

  return maxIndex + 1 // index of nail to count
}

/**
 *
 * @param {number} start
 * @param {number} end
 * @param {[number,number][]} nails
 * @param {number} pre
 *
 * @returns {number}
 */
function findNailIndex(start, end, nails, pre) {
  let min = 0
  let max = nails.length - 1
  let index = -1

  while (min <= max) {
    const mid = Math.floor((min + max) / 2)

    // to early
    if (nails[mid][0] < start) min = mid + 1
    // to too late
    else if (nails[mid][0] > end) max = mid - 1
    // works
    else {
      max = mid - 1 // but looking for first nail that works
      index = mid
    }
  }

  if (index === -1) return -1

  let original = nails[index][1]

  for (let i = index; i < nails.length; i++) {
    // nails are sorted asc so if one won work the rest wont either
    if (nails[i][0] > end) break

    original = Math.min(original, nails[i][1])

    if (original <= pre) return pre
  }

  return original
}

export default solution
