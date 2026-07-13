class Solution {
    constructor() {
        this.map = {
            "1": [],
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"],
        };
    }

    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const solution = [];
        return this.search(digits, 0, solution);
    }

    search(digits, start, solution) {
        if(start === digits.length) {
            return solution;
        }

        const digit = digits[start];
        const letters = this.map[digit];
        const state = [];

        for(let letter of letters) {
            if(solution.length === 0) {
                state.push(letter);
            }
            else {
                state.push(...solution.map(item => `${item}${letter}`));
            }
        }

        solution = state;

        return this.search(digits, start + 1, solution);
    }
}



