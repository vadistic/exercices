/**
 *
 * @param {number[]} A
 * @returns {number | 0}
 */
function solution(A) {
  if (A.length < 2) return 0
  // the problem is finding min and max such as index min < index max

  let maxEnding = 0
  let maxSlice = 0

  for (let i = 0; i < A.length; i++) {
    // what if I would convert it to diffs?
    let diff = i === 0 ? 0 : A[i] - A[i - 1]

    maxEnding = Math.max(0, maxEnding + diff)
    maxSlice = Math.max(maxSlice, maxEnding)
  }

  // will be at leas 0
  return maxSlice
}

export default solution
