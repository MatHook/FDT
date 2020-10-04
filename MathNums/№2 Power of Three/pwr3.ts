/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = (n: number) => {
  let exp: number = parseFloat((Math.log(n) / Math.log(3)).toFixed(10))
  return exp % 1 === 0 ? true : false
};

console.log(isPowerOfThree(27));
