class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const letters = new Map();

        for(const letter of s) {
            letters.set(letter, (letters.get(letter) || 0) + 1)
        }
        for(const letter of t) {
            if(!letters.has(letter)) {
                return false;
            }
            letters.set(letter, letters.get(letter) - 1)
        }

        return !letters.values().some(val => val != 0);

    }
}
