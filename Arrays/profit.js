/*
  explanation: Design an algorithm to find the maximum profit. 
  You may complete as many transactions as you like 
  (i.e., buy one and sell one share of the stock multiple times).
  task: [7, 1, 5, 3, 6, 4]
  result: 7
*/

const getMaxProfit = (array) => {
  let maxProfit = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) maxProfit += array[i] - array[i - 1];
  }

  return maxProfit;
};

console.log(getMaxProfit([7, 1, 5, 3, 6, 4]));
