/**
 * @param {string} S
 * @returns {0|1}
 */
function solution(S) {
  // there is only one parenthesis type so just counting stack elements
  let stackSize = 0

  for (let i = 0; i < S.length; i++) {
    const char = S[i]

    if (char === '(') {
      // here could come break if stack is to big to be clsoed but it will be slow

      stackSize += 1
      continue
    }
    if (char === ')') {
      if (stackSize === 0) return 0 // invalid nesting

      stackSize -= 1
      continue
    }
  }

  return stackSize === 0 ? 1 : 0
}
