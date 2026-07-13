class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        const set = new Set();

        for(let [index, num] of nums.entries()) {
            //console.log(`iterating with num=${num} index=${index}`);
            const target = -1 * num;
            const pairs = this.twoSum(nums, target, index);
            
            if(pairs.length > 0) {
                for(let pair of pairs) {
                    //console.log(`found complementary pair=${pair}`);
                    const triple = [num, ...pair].sort((a, b) => a - b);
                    const tripleStr = triple.join('');
                    if(!set.has(tripleStr)) {
                        result.push(triple);
                        set.add(tripleStr);
                    }
                    // else {
                    //     console.log(`dicarting triple=${triple}`);
                    // }
                }
            }
        }
        
        return result;
    }

    twoSum(nums, target, indexToExclude) {
        let left = 0, right = nums.length - 1;
        const result = []
        while(left < right) {
            if(left === indexToExclude) {
                left++;
                continue;
            }
            else if(right === indexToExclude) {
                right--;
                continue;
            }
            const sum = nums[left] + nums[right];
            if(sum === target) {
                result.push([nums[left], nums[right]]);
                right--;
                left++;
            }
            else if (sum > target) {
                right--;
            }
            else {
                left++;
            }
        }
        return result;
    }
}
