/**
 *
 * @param {number} N
 *
 * @returns {number}
 */
function solution(N) {
  let lenght = 0
  let base = 1

  // calc lenth
  while (base <= N) {
    lenght++
    base = base * 2
  }

  let max = 0
  let current = 0
  // flag to mark when one occured
  let sequence = false

  for (let i = lenght - 1; i >= 0; i--) {
    // bitmask for i-th bit
    const mask = 1 << i

    if ((N & mask) !== 0) {
      // one
      max = Math.max(max, current)
      current = 0
      sequence = true
    } else if (sequence) {
      // zero
      current += 1
    }
  }

  return max
}

export default solution
