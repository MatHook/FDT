const getMaxProfit = (array) => {
  let maxProfit = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1])
      maxProfit += array[i] - array[i - 1];
  }

  return maxProfit;
};

const arr1 = [7,1,5,3,6,4];
console.log(getMaxProfit(arr1));

export default getMaxProfit(arr1);
