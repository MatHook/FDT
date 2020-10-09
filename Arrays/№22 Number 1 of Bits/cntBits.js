/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = (n) => {
  let cnt = 0;
  while(n) {
    if (n & 1) {
      cnt++
    }
    n = n >>> 1
  }
  return cnt
};

console.log(hammingWeight(00000000000000000000000000001011))