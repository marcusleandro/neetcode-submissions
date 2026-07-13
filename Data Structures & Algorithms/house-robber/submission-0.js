class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const table = Array(nums.length).fill(0);
        table[0] = nums[0];

        for(let i = 1; i < nums.length; i++) {
            const withCurrent = nums[i] + (i >= 2 ? table[i - 2] : 0);
            const withoutCurrent = table[i - 1];

            table[i] = Math.max(withCurrent, withoutCurrent);
        }

        return table[nums.length - 1];
    }
    // rob[i] = max(val(i) + rob[n - 2], rob[n - 1]);
}
