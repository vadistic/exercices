/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 *
 * @param {number} val
 * @param {TreeNode| null} left
 * @param {TreeNode | null} right
 *
 * @this {{ val:number, left: TreeNode | null, right: TreeNode | null }}
 */
function TreeNode(val, left, right) {
  /**
   * @type {number}
   */
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true

  /**
   *
   * @param {(number|null)[]} arr
   */
  const isSymetricArr = (arr) => {
    // length -1 here will skip middle (that should not exist but nvm)
    for (let i = 0; i < (arr.length - 1) / 2; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) return false
    }

    return true
  }

  // need an array representation
  let level = 1

  /** @type {(number|null)[][]} */
  const values = [[root.val]]

  /** @type {(TreeNode | null)[]} */
  let current = [root.left, root.right]

  /** @type {(TreeNode | null)[]} */
  let queue = []

  while (current.length || queue.length) {
    const next = current.pop()

    // next level
    if (next === undefined) {
      const isLevelSymetric = isSymetricArr(values[level])

      if (!isLevelSymetric) return false

      current = queue
      queue = []
      level += 1
      continue
    }

    if (!values[level]) values[level] = []

    if (next === null) {
      values[level].push(null)
    } else {
      queue.push(next.right, next.left)
      values[level].push(next.val)
    }
  }

  return true
}

export default isSymmetric
