class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const start = 0;

        const currentWindow = [];
        let max = -Infinity;
        let secondMax = -Infinity;

        for(let i = 0; i < k; i++) {
            const current = nums[i];
            currentWindow.push(current);
            if(current > max) {
                secondMax = max;
                max = current;
            }
            else if(current > secondMax) {
                secondMax = current;
            }
        }

        result.push(max);

        for(let i = 0; i < nums.length - k; i++) {
            const current = nums[i + k];
            currentWindow.shift();
            currentWindow.push(current);
            // if(current > max) {
            //     secondMax = max;
            //     max = current;
            // }
            // else if(current > secondMax) {
            //     secondMax = current;
            // }

            result.push(Math.max(...currentWindow));
        }

        return result;
    }
}
