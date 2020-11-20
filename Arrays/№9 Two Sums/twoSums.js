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
