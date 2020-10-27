/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MIN_INT = -2147483648
  const MAX_INT = 2147483647

  if (x === 0) return 0

  const sign = x < 0 ? -1 : 1

  const unsignedStr = Math.abs(x).toString().split('').reverse().join('')

  const result = Number(unsignedStr) * sign

  if (result < MIN_INT || result > MAX_INT) return 0

  return result
}

export default reverse
