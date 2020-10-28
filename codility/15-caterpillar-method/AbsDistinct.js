/**
 *
 * @param {number[]} A
 *
 * @returns number
 */

function solution(A) {
  if (A.length === 0) return 0
  if (A.length === 1) return 1
  if (A.length === 2) return Math.abs(A[0]) === Math.abs(A[1]) ? 1 : 2

  let i = 0
  let j = A.length - 1

  // skip duplicates on the left side
  const workLeft = () => {
    while (A[i + 1] === A[i]) {
      i += 1
    }
  }

  // skip duplicates on the right side
  const workRight = () => {
    while (A[j - 1] === A[j]) {
      j -= 1
    }
  }

  let left = A[0] < 0 ? -A[0] : 0
  let right = A[A.length - 1] > 0 ? A[A.length - 1] : 0

  workLeft()
  workRight()

  // init
  let count = 1

  while (i <= j) {
    // zeros and duplicates are counted by left side which should be first to reach them
    if (left !== right) {
      count += 1
    }

    // work left side
    if (left >= right && A[i + 1] <= 0) {
      i += 1

      workLeft()

      left = Math.abs(A[i])
      continue
    }

    // work right side
    if (right >= left && A[j - 1] >= 0) {
      j -= 1

      workRight()

      right = Math.abs(A[j])
      continue
    }

    // one of the sides hit 0 limit and second is unproportional

    // work left side
    if (A[i + 1] <= 0) {
      i += 1

      workLeft()

      left = Math.abs(A[i])
      continue
    }

    // work right side
    if (A[j - 1] >= 0) {
      j -= 1

      workRight()

      right = Math.abs(A[j])
      continue
    }

    // so weird case of smth
    break
  }

  return count
}

export default solution
