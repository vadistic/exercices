/**
 *
 * @param {number[]} A
 * @param {number} K
 */
function solution(A, K) {
  const k = A.length > K ? K : K % A.length

  /**
   *
   * @param {number[]} arr
   */
  const rotateOnce = (arr) => {
    const last = arr[arr.length - 1]

    for (let i = arr.length - 2; i >= 0; i--) {
      A[i + 1] = A[i]
    }

    A[0] = last
  }

  for (let i = 0; i < k; i++) {
    rotateOnce(A)
  }

  return A
}

export default solution
