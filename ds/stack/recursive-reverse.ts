// https://www.geeksforgeeks.org/sort-a-stack-using-recursion/

import { Stack } from './stack'

export const recursiveStackReverse = (stack: Stack) => {
  if (stack.isEmpty()) return

  const element = stack.pop()

  recursiveStackReverse(stack)

  recursiveStackBottomInsert(stack, element)
}

export const recursiveStackBottomInsert = (stack: Stack, element: number) => {
  if (stack.isEmpty()) {
    stack.push(element)
    return
  }

  const temp = stack.pop()

  recursiveStackBottomInsert(stack, element)

  stack.push(temp)
}
