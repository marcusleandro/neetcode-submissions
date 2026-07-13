class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let start = 0;

        for(let end = 1; end < prices.length; end++) {
            const currentProfit = prices[end] - prices[start];

            if(currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }

            if(prices[end] < prices[start]) {
                start = end;
            }
        }

        return maxProfit;
    }
}
