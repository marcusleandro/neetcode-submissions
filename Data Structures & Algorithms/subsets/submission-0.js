class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const solutions = [];
        const state = [];
        this.search(0, nums, state, solutions);
        return solutions;
    }

    /**
     * @param {number} start
     * @param {number[]} array
     * @param {number[]} state
     * @param {number[][]} solutions
     */
    search(start, nums, state, solutions) {
        solutions.push([...state]);
        for(let i = start; i < nums.length; i++) {
            state.push(nums[i]);
            this.search(i + 1, nums, state, solutions);
            state.pop();
        }
    }
}
