/**
 *
 * @param {number} K
 * @param {number[]} A
 */
function solution(K, A) {
  let count = 0

  let length = 0

  for (const rope of A) {
    length += rope

    if (length >= K) {
      count += 1
      length = 0
    }
  }

  return count
}

export default solution