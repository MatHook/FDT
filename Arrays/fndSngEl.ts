/*
  explanation: You are given a sorted array consisting 
  of only integers where every element appears exactly 
  twice, except for one element which appears exactly once. 
  Find this single element that appears only once.
  task: [1, 1, 2, 3, 3, 4, 4, 8, 8]
  result: 2
*/

function singleNonDuplicate(nums: number[]): number {
  return nums.reduce((prev, curr) => {
    return prev ^ curr;
  }, 0);
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
