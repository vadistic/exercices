/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  /**
   *
   * @param {string} str
   * @param {number} i
   */
  const removeIndex = (str, i) => str.substring(0, i) + str.substring(i + 1)

  /**
   * true if b is bigger or equal
   * @param {string} a
   * @param {string} b
   */
  const compare = (a, b) => {
    let numA = a.replace(/^0+/, '')
    let numB = b.replace(/^0+/, '')

    if (numA.length !== numB.length) {
      return numB.length > numA.length
    }

    for (let i = 0; i < a.length; i++) {
      const digitA = +a[i]
      const digitB = +b[i]

      if (digitA !== digitB) return digitB > digitA
    }

    // looks that are equal
    return true
  }

  /**
   * @param {string} input
   */
  const removeDigit = (input) => {
    let leader = input.substring(1)

    for (let i = 1; i < input.length; i++) {
      const candidate = removeIndex(input, i)

      // if candidate is smaller
      if (compare(candidate, leader)) {
        leader = candidate
      }
    }

    return leader
  }

  const recursion = (input, i) => {
    if (i === 0) return input
    return recursion(removeDigit(input), i - 1)
  }

  const result = recursion(num, k).replace(/^0+/, '')

  if (result === '') return '0'

  return result
}

export default removeKdigits
