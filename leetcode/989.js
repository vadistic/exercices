// https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  const KK = '' + K

  if (A.length < KK.length) {
    A.unshift(...Array(KK.length - A.length).fill(0))
  }

  for (let i = A.length - 1, j = KK.length - 1; i >= 0; i--, j--) {
    const a = A[i]
    const k = j >= 0 ? +KK[j] : 0

    const res = a + k

    if (res <= 9) {
      A[i] = res

      // it may be good moment to break
      if (j <= 0) break
      else continue
    }

    A[i] = res - 10

    if (i === 0) {
      A.unshift(1)
      break
    }

    A[i - 1] += 1
  }

  return A
}

export default addToArrayForm
