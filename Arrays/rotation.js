/*
  explanation: Given an array, rotate the array to the left by k steps, where k is non-negative.
  task: [1, 2, 3, 4, 5, 6, 7]
  result: [2, 3, 4, 5, 6, 7, 1]
*/

const rotation = (array, k) => {
  array = array.slice();
  while (k--) array.push(array.shift());
  return array;
};

console.log(rotation([1, 2, 3, 4, 5, 6, 7], 1));
