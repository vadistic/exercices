/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const str = s.trimStart()

  /**
   * @type {number}
   */
  let sign
  let resultSrt = ''

  const numRe = /[0-9]/

  for (const char of str) {
    if (!sign && !resultSrt && (char === '+' || char === '-')) {
      sign = char === '-' ? -1 : 1
      continue
    }

    if (numRe.test(char)) {
      resultSrt += char
      continue
    }

    break
  }

  const MIN_INT = -1 * Math.pow(2, 31)
  const MAX_INT = Math.pow(2, 31) - 1

  const result = sign === -1 ? -1 * Number(resultSrt) : Number(resultSrt)

  if (result <= MIN_INT) return MIN_INT
  if (result >= MAX_INT) return MAX_INT

  return result
}

export default myAtoi
