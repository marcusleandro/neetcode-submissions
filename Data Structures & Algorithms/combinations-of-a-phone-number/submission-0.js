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
        const solutions = [];
        const state = [];

        this.search(digits, 0, state, solutions);

        return solutions;
    }

    search(digits, start, state, solutions) {
        if(start === digits.length) {
            solutions.push(...state);
            return;
        }

        const digit = digits[start];
        const letters = this.map[digit];

        const arr = [];

        for(let letter of letters) {
            if(state.length === 0) {
                arr.push(letter);
            }
            else {
                arr.push(...state.map(item => `${item}${letter}`));
            }
        }

        state = arr;

        this.search(digits, start + 1, state, solutions);
    }
}



