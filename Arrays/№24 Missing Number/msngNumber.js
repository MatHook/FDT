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
