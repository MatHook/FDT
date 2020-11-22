/*
  explanation: Say you have an array for which 
  the ith element is the price of a given stock on day i.
  If you were only permitted to complete at most one 
  transaction (i.e., buy one and sell one share of the stock), 
  design an algorithm to find the maximum profit.
  task: [7, 1, 5, 3, 6, 4]
  result: 5
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0],
    maxProfit = 0;
  for (i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    maxProfit = Math.max(prices[i] - minPrice, maxProfit);
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
