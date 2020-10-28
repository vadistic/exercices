/**
 *
 * @param {number[]} A
 * @returns {0|1}
 */
function solution(A) {
  if (A.length < 3) return 0

  // condition
  // 0 ≤ P < Q < R < N

  // (1) A[P] + A[Q] > A[R],
  // (2) A[Q] + A[R] > A[P],
  // (3) A[R] + A[P] > A[Q].

  // lets simplify notations by skiping[] and search for P

  // R - Q < P < R + Q from (1) & (2)
  // => so Q MUST be > 0 and btw. best guess would be max(A)

  let hasQ = false

  for (const num of A) {
    if (num > 0) {
      hasQ = true
      break
    }
  }

  if (!hasQ) return 0

  A.sort((a, b) => a - b) // asc

  for (let i = 0; i < A.length - 2; i++) {
    // is sorted desc so
    // => A[i+2] + A[i+1] > A[i]
    // => A[i+2] + A[i] > A[i+1] if A[i] > 0 (and one need to be, so in sorted arr A[i] need to be)

    if (A[i] > 0 && A[i + 2] < A[i] + A[i + 1]) {
      return 1
    }
  }

  return 0
}

export default solution
