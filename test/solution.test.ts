import solution from './solution'

describe('solution', () => {
  type Args = [number]
  type Result = number

  const fixture: [string, Args, Result][] = [['basic', [1], 1]]

  test('works', () => {
    const result = solution(1)

    expect(result).toBe(1)
  })

  test.each(fixture)('case %#: %s', (name, args, expected) => {
    const res = solution(...args)

    if (res !== expected) {
      console.warn(`test: "${name}"`, res, ' !== ', expected)
      console.log(`arg: "${args}"`)
      console.log(`res: "${res}"`)
      console.log(`exp: "${expected}"`)
    }

    expect(res).toBe(expected)
  })
})
