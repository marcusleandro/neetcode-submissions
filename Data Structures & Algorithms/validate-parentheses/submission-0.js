class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = { "(": ")", "[": "]", "{": "}" };

        for(let c of s) {
            if(c in map) {
                stack.push(c);
            }
            else {
                const top = stack.pop();
                if(map[top] !== c) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
