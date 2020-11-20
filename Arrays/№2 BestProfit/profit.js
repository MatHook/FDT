const getMaxProfit = (array) => {
  let maxProfit = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) maxProfit += array[i] - array[i - 1];
  }

  return maxProfit;
};

console.log(getMaxProfit([7, 1, 5, 3, 6, 4]));
