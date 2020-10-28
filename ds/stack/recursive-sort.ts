// https://www.geeksforgeeks.org/sort-a-stack-using-recursion/

import { Stack } from './stack'

export const recursiveStackSort = (stack: Stack) => {
  if (stack.isEmpty()) return

  // remove top element
  const element = stack.pop()

  // sort rest
  recursiveStackSort(stack)

  // insert element in sorted order
  recursiveStackSortedInsert(stack, element)
}

export const recursiveStackSortedInsert = (stack: Stack, element: number) => {
  // ascending
  if (stack.isEmpty() || element >= stack.top()) {
    stack.push(element)
    return
  }

  const temp = stack.pop()

  recursiveStackSortedInsert(stack, element)

  stack.push(temp)
}
