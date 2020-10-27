// https://leetcode.com/problems/3sum/

// [-1,0,1,2,-1,-4]
// [0,0,0,1,2]
// [0,0,0]
// [-1,0,1]

/**
 *
 * ! works but too slow
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
   * @type {Record<string,[number,number][]>}
   */
  const map = {}

  /**
   *
   * @param {[number,number]} pair1
   * @param {[number,number]} pair2
   */
  const isValueDuplicate = ([a, b], [i, j]) =>
    (nums[a] === nums[i] && nums[b] === nums[j]) ||
    (nums[a] === nums[j] && nums[b] === nums[i])

  // create hasmap of sums - doing only halfs for perf. and to prevent duplicates
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // zeros are such a bother - saving only 0 sum will handle this
      if (nums[i] === 0 || nums[j] === 0) continue

      const sum2 = nums[i] + nums[j]

      if (!map[sum2]) map[sum2] = []

      // prevent "value duplicates"
      if (map[sum2].some((pair) => isValueDuplicate(pair, [i, j]))) {
        continue
      }

      map[sum2].push([i, j])
    }
  }

  const result = []
  let zeros = 0

  for (let k = 0; k < nums.length; k++) {
    const val = nums[k]
    if (val === 0) zeros++

    const pairs = map[-val]
    if (!pairs) continue

    // mark sum as "done" (skips nums[k] duplicates)
    delete map[-nums[k]]

    const triples = pairs.filter(([i, j]) => i !== k && j !== k)

    // -c = a + b
    // so
    // -a = b + c
    // -b = a + c
    triples.forEach(([i, j]) => {
      const valA = nums[i] + val
      const valB = nums[j] + val

      // make sure there is no duplicates on current index k
      if (map[valA])
        map[valA] = map[valA].filter(([a, b]) => a !== k && b !== k)
      if (map[valB])
        map[valB] = map[valB].filter(([a, b]) => a !== k && b !== k)
    })

    if (triples.length > 0) {
      result.push(...triples.map(([i, j]) => [nums[i], nums[j], nums[k]]))
    }
  }

  // triple zeros are super special case thats breaks my code
  if (zeros >= 3) result.push([0, 0, 0])

  return result
}

export default threeSum
