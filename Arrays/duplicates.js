const nums = [0,0,1,1,1,2,2,3,3,4];

const removeDuplicates = (array) => {
  const uniqNums = new Set(array);
  const backToArray = [...uniqNums];
  console.log(backToArray);
  console.log(array);
};

export default removeDuplicates(nums);
