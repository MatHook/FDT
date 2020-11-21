/*
  explanation: Given a non-empty array of integers nums, 
  every element appears twice except for one. Find that single one.
  task: [2, 2, 1]
  result: 1
*/

const singulatiryCheck = (array) => {
  let a = 0;
  for (let i = 0; i < array.length; i++) a ^= array[i];
  return a;
};

console.log(singulatiryCheck([2, 2, 1]));
