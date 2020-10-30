/**
 *
 * @param {number[]} A
 *
 * @returns {number}
 */
function solution(A) {
  if (A.length === 1) return 0
  if (A.length === 2) return A[0] === A[1] ? 1 : 0

  // compute leader

  let leader = A[0]
  let n = 1

  for (let i = 0; i < A.length; i++) {
    if (A[i] === leader) n += 1
    else n -= 1

    if (n === 0) {
      leader = A[i]
      n = 1
    }
  }

  // compute count

  let total = 0
  for (let a of A) {
    if (a == leader) total++
  }

  if (total <= A.length / 2) return 0 // impossible

  let equiCount = 0
  let leftCount = 0

  // for equi leader leader must be a leader in both slices
  // so leader count in 0...i must be greater than i/2
  // and for the right leader count in i+1 ... N must be greater than (N-i-1)/2

  // -1 because S+1 <= N so last index cant have an equileader
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === leader) leftCount++

    const rightCount = total - leftCount

    if (leftCount > (i + 1) / 2 && rightCount > (A.length - i - 1) / 2) {
      equiCount++
    }
  }

  return equiCount
}

export default solution
