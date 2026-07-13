class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const minIndex = this.findMinIndex(nums);
        
        let result = this.binarySearch(nums, target, 0, minIndex - 1);
        
        if(result === -1) {
            result = this.binarySearch(nums, target, minIndex, nums.length - 1);
        }
        
        return result;
    }

    findMinIndex(nums) {
        let left = 0, right = nums.length - 1;
        while(left < right) {
            const mid = left + Math.floor((right - left) / 2); 
            //console.log(`left=${left} right=${right} mid=${mid}`);
            if(nums[mid] > nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        return left;
    }

    binarySearch(nums, target, left, right) {
        while(left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if(nums[mid] === target) {
                return mid;
            }
            else if(nums[mid] > target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        return -1;
    }
}
