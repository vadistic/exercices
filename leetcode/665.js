// https://leetcode.com/problems/non-decreasing-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  
  /**
   *
   * @param {number[]} arr
   * @param {boolean} recursive
   * @returns {boolean}
   */
  const check = (arr, recursive = false) => {
    // just in case
    if(nums.length < 2) return true
    
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i]
      const next = arr[i + 1]

      if (next < current) {
        if (recursive) {
          const arrA = arr.slice(0, i).concat(arr.slice(i + 1))
          const arrB = arr.slice(0, i + 1).concat(arr.slice(i + 2))
          const caseA = check(arrA)
          const caseB = check(arrB)

          return caseA || caseB
        } 
        
        return false
      }

      // all good - continue
    }

    return true
  }

  return check(nums, true)
}

export default checkPossibility
