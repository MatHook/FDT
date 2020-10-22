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
