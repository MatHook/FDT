/*
  explanation: Given an array nums with n objects 
  colored red, white, or blue, sort them in-place 
  so that objects of the same color are adjacent, 
  with the colors in the order red, white, and blue.
  task: [2, 0, 2, 1, 1, 0]
  result: [0, 0, 1, 1, 2, 2]
*/

function sortColors(nums: number[]): void {
  nums = nums.sort((a, b) => a - b);
}
