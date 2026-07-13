class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numFrequency = new Map();

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const frequency = (numFrequency.get(num) || 0) + 1;
            numFrequency.set(num, frequency);
        }

        const tuplesFrequency = [];

        for(const [key, value] of numFrequency) {
            tuplesFrequency.push([key, value]);
        }

        tuplesFrequency.sort((a, b) => b[1] - a[1]);

        const result = Array.from({length: k}, () => null);

        for(let i = 0; i < k; i++) {
            result[i] = tuplesFrequency[i][0];
        }

        return result;
    }
}
