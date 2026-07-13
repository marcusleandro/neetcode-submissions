class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // const solutions = [];
        // const state = [];
        // this.searchCombinationSum(nums, target, state, solutions);
        // return solutions;

        nums.sort((a, b) => a - b);
        const result = [];
        const current = [];

        const backtrack = (start, remaining) => {
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            for (let i = start; i < nums.length; i++) {
                const num = nums[i];
                // Poda: se o número atual já ultrapassa o que falta, interrompe
                if (num > remaining) break;

                // Escolhe o número
                current.push(num);
                // Mesmo índice (i) pois repetição é permitida
                backtrack(i, remaining - num);
                // Desfaz a escolha (backtrack)
                current.pop();
            }
        };

        backtrack(0, target);
        return result;
    }

    searchCombinationSum(nums, target, state, solutions) {
        //console.log(`solutions: `, solutions);
        if(this.isValidState(state, target, solutions)) {
            solutions.push([...state]);
        }

        for(let cadidate of this.getCandidates(state, nums, target)) {
            state.push(cadidate);
            this.searchCombinationSum(nums, target, state, solutions);
            state.pop();
        }
    }

    isValidState(state, target, solutions) {
        const stateSum = state.reduce((acc, num) => acc + num, 0);
        if(stateSum !== target) return false;
        for(let sol of solutions) {
            if(this.compare(state, sol)) {
                return false;
            }
        }
        return true;
    }

    compare(arr1, arr2) {
        if(arr1.length !== arr2.length) return false;

        const map = new Map();
        for(let i = 0; i < arr1.length; i++) {
            map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
        }
        for(let i = 0; i < arr2.length; i++) {
            map.set(arr2[i], (map.get(arr2[i] || 0) - 1));
        }

        return ![...map.values()].some(i => i !== 0);
    }

    getCandidates(state, nums, target) {
        const stateSum = state.reduce((acc, num) => acc + num, 0);
        const complement = target - stateSum;
        return nums.filter(num => num <= complement);
    }
}
