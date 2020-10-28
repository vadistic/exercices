import { randomIntArray, reverseArray } from '../utils/array'

import { recursiveStackReverse } from './recursive-reverse'
import { Stack } from './stack'

describe('recurively reverse stack', () => {
  jest.setTimeout(500)

  const fixture: [string, number[]][] = [
    ['short', [2, 8, 45, 7, 45, 3]],
    ['duplicates', [3, 3, 3, 3, 3]],
    ['empty', []],
    ['single', [1]],
    ['big', randomIntArray(1000)],
  ]

  test.each(fixture)('case %#: %s', (name, input) => {
    const stack = new Stack(input)

    recursiveStackReverse(stack)

    expect(stack.values).toMatchObject(reverseArray(input))
  })
})
