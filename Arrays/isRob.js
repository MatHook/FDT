/*
  explanation: Given a list of non-negative integers 
  representing the amount of money of each house, 
  determine the maximum amount of money you 
  can rob tonight without alerting the police.
  task: [2, 7, 9, 3, 1]
  result: 12
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let p = 0;
  return nums.reduce((t, n) => Math.max(p + n, (p = t)), 0);
};

console.log(rob([2,7,9,3,1]));
