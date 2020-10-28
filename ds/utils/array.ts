import { randomInt } from './random'

export const createArray = (length: number, cb: () => number): number[] =>
  Array.from({ length }).map(() => cb())

export const randomIntArray = (
  length: number,
  min?: number,
  max?: number,
): number[] => Array.from({ length }).map(() => randomInt(min, max))
