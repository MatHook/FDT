/*
  explanation: Given an array of integers nums and an integer target, 
  return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, 
  and you may not use the same element twice.
  You can return the answer in any order.
  task: [2, 7, 11, 15], 9
  result: [0, 1]
*/

const twoSums = (nums, target) => {
  let outArr = [];
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        outArr.push(i, j);
      }
  return outArr;
};

console.log(twoSums([2, 7, 11, 15], 9));
