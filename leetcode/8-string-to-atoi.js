/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let str = s.trimStart()

  let resultSrt = ''
  let sign = str[0] === '-' ? -1 : 1

  const numRe = /[0-9]/

  for (const char of str) {
    if (resultSrt === '' && (char === '+' || char === '-')) {
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

  const result = sign * Number(resultSrt)

  if (result <= MIN_INT) return MIN_INT
  if (result >= MAX_INT) return MAX_INT

  return sign * result
}

export default myAtoi
