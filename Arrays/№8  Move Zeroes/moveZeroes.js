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

const nums = [0,1,0,3,12];
console.log(moveZeroes(nums));
