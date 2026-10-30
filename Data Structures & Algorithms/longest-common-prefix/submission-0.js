class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let first = strs[0];
        let longest = "";

        for(let index = 0; index < first.length; index++) {
            const letter = first[index];
            let checked = true;

            for(let i = 1; i < strs.length; i++) {
                const current = strs[i];
                if(current[index] !== letter) {
                    checked = false;
                    break;
                }
            }

            if(checked) {
                longest += letter;
            }
            else break;
        }

        return longest
    }
}
