class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complement = new Map();
        for(const [index, num] of nums.entries()) {
            const diff = target - num;
            if(complement.has(diff)) {
                return [complement.get(diff), index];
            }
            complement.set(num, index);
        }
        
        return [];
    }
}
