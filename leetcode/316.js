/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  /**
   * @type {Record<string,number>}
   */
  const indicies = {}

  /** @type {Record<string,boolean>} */
  const done = {}

  /**
   * @type {string[]}
   */
  let result = []

  // create hashmap
  for (let i = 0; i < s.length; i++) {
    indicies[s[i]] = i
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (done[char] === true) continue

    let j = result.length - 1

    // do not go before last character!!!
    while (j >= 0 && j === result.length - 1) {
      // if is bigger and occur later on
      if (result[j] > char && indicies[result[j]] >= i) {
        // mark as not really done
        done[result[j]] = false
        // remove from stack
        result.pop()
      }
      // decr
      j -= 1
    }

    result.push(char)
    done[char] = true
  }

  return result.join('')
}

export default removeDuplicateLetters
