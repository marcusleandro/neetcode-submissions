class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const currentWindow = [];

        for(let i = 0; i < k; i++) {
            const current = nums[i];
            currentWindow.push(current);            
        }

        result.push(Math.max(...currentWindow));

        for(let i = 0; i < nums.length - k; i++) { // O(n * k)
            const current = nums[i + k];
            currentWindow.shift();
            currentWindow.push(current);

            result.push(Math.max(...currentWindow)); // O(k)
        }

        return result;
    }
}
