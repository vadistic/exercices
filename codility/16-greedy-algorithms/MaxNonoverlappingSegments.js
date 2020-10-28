/**
 *
 * @param {number[]} A
 * @param {number[]} B
 *
 * @returns {number}
 */
function solution(A, B) {
  let count = 0
  let prevEnd = -1

  for (let i = 0; i < A.length; i++) {
    // beggining of a new segment needs to be after it's predeecessor
    if (A[i] > prevEnd) {
      count++
      prevEnd = B[i]
    }
  }

  return count
}

export default solution
