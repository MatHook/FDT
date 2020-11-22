/*
  explanation: Given an integer array nums, 
  find the contiguous subarray 
  (containing at least one number) 
  which has the largest sum and return its sum.
  task: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  result: 6
*/

var maxSubArr = (nums) => {
  let maxSum = nums[0];
  let constSum = nums[0];

  nums.slice(1).forEach((el) => {
    if (el > constSum) constSum = Math.max(el, constSum + el);
    else constSum += el;

    if (constSum > maxSum) maxSum = constSum;
  });

  return maxSum
};

console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
