/* eslint-disable jest/no-commented-out-tests */
/* eslint-disable jest/no-export */
import solution from './solution1'

export const naiveSolution = (n: number) => n

describe('solution1', () => {
  type Args = [number]
  type Result = number

  const fixturewitResult: [string, Args, Result][] = [['basic', [1], 1]]

  test('works', () => {
    const result = solution(1)

    expect(result).toBe(1)
  })

  test.each(fixturewitResult)('case %#: %s', (name, args, expected) => {
    const res = solution(...args)

    if (res !== expected) {
      console.warn(`test: "${name}"`, res, ' !== ', expected)
      console.log(`arg: "${args}"`)
      console.log(`res: "${res}"`)
      console.log(`exp: "${expected}"`)
    }

    expect(res).toBe(expected)
  })

  // const fixture: [string, Args][] = [['basic', [1]]]

  // test.each(fixture)('case %#: %s', (name, args) => {
  //   const res = solution(...args)
  //   const expected = naiveSolution(...args)

  //   if (res !== expected) {
  //     console.warn(`test: "${name}"`, res, ' !== ', expected)
  //     console.log(`arg: "${args}"`)
  //     console.log(`res: "${res}"`)
  //     console.log(`exp: "${expected}"`)
  //   }

  //   expect(res).toBe(expected)
  // })
})
