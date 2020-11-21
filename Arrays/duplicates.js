/*
  explanation: Given a sorted array nums, remove the duplicates in-place
  such that each element appears only once and returns the new length.
  task: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  result: [0, 1, 2, 3, 4]
*/

const removeDuplicates = (array) => new Set([...array]);

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
