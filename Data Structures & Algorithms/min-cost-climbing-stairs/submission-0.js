class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const table = Array(cost.length + 1).fill(Infinity);
        table[0] = 0;
        table[1] = 0;

        for(let i = 0; i < cost.length; i++) {
            if(i !== 0) {
                table[i + 1] = Math.min(table[i] + cost[i], table[i + 1]);
            }
            table[i + 2] = Math.min(table[i] + cost[i], table[i + 2]);
        }

        return table[cost.length];
    }
}
