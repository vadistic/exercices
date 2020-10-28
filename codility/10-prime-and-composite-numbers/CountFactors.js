/**
 * @param {number} N
 */
function solution(N) {
  // no 0  - thanks!
  if (N === 1) return 1

  // 1 is always and N is always so I will add them later
  let count = 0
  let square = 0

  // skip calcing for i=1
  let i = 2

  // N = D * M
  // D = N / M
  // D is int when N % M === 0

  // lets use a variable to avoid dividing N/i 2 times
  let division = N / i

  // there is no point in going further than N/i
  // "second pair value" will be covered by multiplying count by 2
  while (i < division) {
    // N % i === 0 when Number.isInteger(division)
    if (Number.isInteger(division)) {
      count += 1
    }

    i += 1
    division = N / i
  }

  // if i === N / i then N = i^2 and I need to add one count but then avoid doubling it
  if (i === division) {
    square = 1
  }

  const res = count * 2 + square + 2

  return res
}

export default solution
