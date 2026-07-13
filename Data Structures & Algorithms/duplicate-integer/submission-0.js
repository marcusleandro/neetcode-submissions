class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for(let i = 0; i < nums.length; i++) {
            const current = nums[i];
            if(set.has(current))    return true;
            set.add(current);
        }

        return false;
    }
}
