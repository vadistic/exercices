import { randomIntArray } from '../utils/array'
import { sortIntAsc } from '../utils/sort'

import { recursiveStackSort } from './recursive-sort'
import { Stack } from './stack'

describe('recurive sort stack', () => {
  jest.setTimeout(500)

  const fixture: [string, number[]][] = [
    ['unsorted', [2, 8, 45, 7, 45, 3]],
    ['empty', []],
    ['duplicates', [3, 3, 3, 3, 3]],
    ['single', [1]],
    ['big', randomIntArray(1000)],
  ]

  test.each(fixture)('case %#: %s', (name, input) => {
    const stack = new Stack(input)

    recursiveStackSort(stack)

    expect(stack.values).toMatchObject(sortIntAsc(input))
  })
})
