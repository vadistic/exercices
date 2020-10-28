import { randomIntArray } from '../utils/array'
import { sortIntAsc } from '../utils/sort'

import { recursivelySortStack } from './recursively-sort-stack'
import { Stack } from './stack'

describe('recurively sort stack', () => {
  const fixture: [string, number[]][] = [
    ['unsorted', [2, 8, 45, 7, 45, 3]],
    ['empty', []],
    ['duplicates', [3, 3, 3, 3, 3]],
    ['single', [1]],
    ['big', randomIntArray(1000)],
  ]

  jest.setTimeout(500)

  test.each(fixture)('case %#: %s', (name, input) => {
    const stack = new Stack(input)
    const result = recursivelySortStack(stack)

    console.log(result.values)

    expect(result.values).toMatchObject(sortIntAsc(input))
  })
})
