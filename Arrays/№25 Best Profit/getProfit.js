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
