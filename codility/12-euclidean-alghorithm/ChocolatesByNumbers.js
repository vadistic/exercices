/**
 *
 * @param {number} N
 * @param {number} M
 */
function solution(N, M) {
  let gcd

  let a = N
  let b = M

  // ! cannot use recursion becase stack will overflow on huge numbers
  while (!gcd) {
    let mod = a % b

    if (mod === 0) {
      gcd = b
    }

    a = b
    b = mod
  }

  return N / gcd
}

export default solution
