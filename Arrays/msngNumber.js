/*
  explanation: Given an array nums containing n 
  distinct numbers in the range [0, n], return 
  the only number in the range that is missing from the array.
  task: [9,6,4,2,3,5,7,0,1]
  result: 8
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = (nums) => {
  let sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i <= sortedNums.length; i++) {
    if (i !== sortedNums[i]) {
      return i
    }
  }
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
