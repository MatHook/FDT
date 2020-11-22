/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = (x, y) => {
  let dist = 0;
  let comb = x ^ y;

  while (comb !== 0) {
    if (comb % 2) {
      dist++;
    }
    comb >>= 1;
  }
  return dist;
};

console.log(hammingDistance(1, 4));
