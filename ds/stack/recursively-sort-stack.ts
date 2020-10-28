import { Stack } from './stack'

// ascending
export const recursivelySortStack = (stack: Stack) => {
  if (!stack.isEmpty()) {
    // remove top element
    const element = stack.pop()

    // sort rest
    recursivelySortStack(stack)

    // insert element in sorted order
    sortedInsert(stack, element)
  }

  return stack
}

const sortedInsert = (stack: Stack, element: number) => {
  if (stack.isEmpty() || element >= stack.top()) {
    stack.push(element)
  } else {
    const temp = stack.pop()
    sortedInsert(stack, temp)

    stack.push(temp)
  }
}
