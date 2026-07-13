class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const unique = new Set();

        for(let num of nums) {
            unique.add(num);
        }
        
        for(let num of nums) {
            if(!unique.has(num - 1)) {
                let count = 1;
                let current = num + 1;
                while(unique.has(current)) {
                    count++;
                    current += 1;
                }
                longest = Math.max(longest, count);
            }
        }

        return longest;
    }
}
