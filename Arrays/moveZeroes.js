/*
  explanation: Given an array nums, write a function to move all 0's to the end of it 
  while maintaining the relative order of the non-zero elements.
  task: [0, 1, 0, 3, 12]
  result: [1, 3, 12, 0, 0]
*/

const moveZeroes = (array) => {
  let i, temp;

  for (i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      temp = array.splice(i, 1);
      array.push(temp[0]);
    }
  }
  return array;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
