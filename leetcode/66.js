// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // go from right
  for (let i = digits.length - 1; i >= 0; i--) {
    // simple
    if (digits[i] !== 9) {
      digits[i] += 1
      break
    }

    // needs aditional element
    if (i === 0) {
      digits[i] = 0
      digits.unshift(1)
      break
    }

    // next can be incremented
    if (digits[i - 1] !== 9) {
      digits[i] = 0
      digits[i - 1] += 1
      break
    }

    // try forward
    digits[i] = 0
  }

  return digits
}

export default plusOne
