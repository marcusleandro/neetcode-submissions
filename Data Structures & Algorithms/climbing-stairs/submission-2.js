class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, memo = {}) {
        if(memo[n]) return memo[n];
        if(n === 1) return 1;
        if(n === 2 ) return 2;

        memo[n] = this.climbStairs(n - 1, memo) + this.climbStairs(n - 2, memo);
        return memo[n];
    }
}
