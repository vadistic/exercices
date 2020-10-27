/**
 * https://leetcode.com/problems/max-points-on-a-line/
 *
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length < 3) return points.length

  const isPointOnLine = ([[X1, Y1], [X2, Y2]], [X3, Y3]) => {
    // handle vertical
    if (X1 === X2) {
      return X3 === X1
    }

    // handle horizontal
    if (Y1 === Y2) {
      return Y3 === Y1
    }

    /* eslint-disable no-undef */
    const X1n = BigInt(X1)
    const Y1n = BigInt(Y1)
    const X2n = BigInt(X2)
    const Y2n = BigInt(Y2)
    const X3n = BigInt(X3)
    const Y3n = BigInt(Y3)
    /* eslint-enable no-undef */

    // delta match
    const deltaMatch = (X1n - X3n) * (Y1n - Y2n) === (X1n - X2n) * (Y1n - Y3n)

    if (!deltaMatch) return false

    // point match - need to do 3 rounds of equations to handle [0,0] and js floats
    // const sameLine1 = (X1 * Y2 - X2 * Y1) / (X1 - X2)
    // const sameLine2 = (X1 * Y3 - X3 * Y1) / (X1 - X3)
    // const sameLine3 = (X2 * Y3 - X3 * Y2) / (X2 - X3)

    // const eq1 = sameLine1 === sameLine2
    const eq1 =  (X1n * Y2n - X2n * Y1n) * (X1n - X3n) === (X1n * Y3n - X3n * Y1n) * (X1n - X2n)
    if(!eq1) return false

    // const eq2 = sameLine1 === sameLine3
    const eq2 = (X1n * Y2n - X2n * Y1n) * (X2n - X3n) === (X2n * Y3n - X3n * Y2n) * (X1n - X2n) 
    if(!eq2) return false

    // const eq3 = sameLine2 === sameLine3
    const eq3 = (X1n * Y3n - X3n * Y1n) *  (X2n - X3n) === (X2n * Y3n - X3n * Y2n) * (X1n - X3n) 
    if(!eq3) return false

    return true
  }

  const pointsEqual = ([X1, Y1], [X2, Y2]) => X1 === X2 && Y1 === Y2

  const linesEqual = (line, [point1, point2]) => {
    return isPointOnLine(line, point1) && isPointOnLine(line, point2)
  }

  const lines = []
  let max = 2

  // handle weird case where all points are the same
  let allTheSame = true

  for (const P of points) {
    if (pointsEqual(P, points[0])) continue

    allTheSame = false
    break
  }

  if (allTheSame) return points.length

  // main loop(s)
  for (const A of points) {
    for (const B of points) {
      // point s are same or in the same place - do not form a line to calculate
      if (A === B || pointsEqual(A, B)) continue

      const line = [A, B]
      let count = 2
      let fails = 0

      // already done
      if (lines.some((el) => linesEqual(el, line))) {
        continue
      }

      for (const P of points) {
        // those are current points, already counted
        if (A === P || B === P) continue

        // points in the same place as line markers - would break my eqation
        if (pointsEqual(A, P) || pointsEqual(B, P)) {
          count += 1
          continue
        }

        if (isPointOnLine(line, P)) {
          count += 1
        } else {
          fails += 1

          // some other line have better max already
          if (max > points.length - fails) break
        }
      }

      // so if more than half point are on the same line then it's surerly this
      if (count > points.length / 2) return count

      lines.push(line)
      max = Math.max(count, max)
    }
  }

  return max
}

export default maxPoints
