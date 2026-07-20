class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const freq = {}; 
        for(let i = 1; i < nums.length; i++) {
            freq[i] = 0;
        }

        for(let num of nums) {
            if(freq[num] > 0) {
                return num;
            }
            freq[num]++;
        }
        
        return -1;
    }

    hashMapSolution(nums) {
        const set = new Set();

        for(let num of nums) {
            if(set.has(num)) {
                return num;
            }
            set.add(num);
        }

        return -1;
    }
}
