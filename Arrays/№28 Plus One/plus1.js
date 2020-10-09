/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let last = BigInt(digits.join(''))
  last++
  return last.toString().split('')
};

console.log(plusOne([1,2,3]))