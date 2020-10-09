/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let p = 0;
  return nums.reduce((t, n) => Math.max(p + n, (p = t)), 0);
};

console.log(rob([1, 2]));
