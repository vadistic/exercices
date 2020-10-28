export const randomInt = (min = -100, max = 100): number => {
  return Math.floor(Math.random() * (max - min)) + min
}
