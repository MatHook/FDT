/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points === null) return 0;
  if (points.length <= 2) return points.length;

  let solution = 0;

  for (let i = 0; i < points.length; i++) {
    map = new Map();
    let duplicate = 0;
    let max = 0;
    for (let j = i + 1; j < points.length; j++) {
      let deltaX = points[j].x - points[i].x;
      let deltaY = points[j].y - points[i].y;

      if (deltaX === 0 && deltaY === 0) {
        duplicate++;
        continue;
      }

      gcd(deltaX, deltaY);
      let dX = deltaX / gcd;
      let dY = deltaY / gcd;

      map[dX, dY] = map[dX, dY] + 1;
      max = Math.max(max, map[dX, dY]);
    }
    solution = Math.max(solution, max + duplicate + 1);
  }

  return solution
};

let gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
