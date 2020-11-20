const removeDuplicates = (array) => {
  const uniqNums = new Set(array);
  const backToArray = [...uniqNums];

  console.log(backToArray);
  console.log(array);
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
