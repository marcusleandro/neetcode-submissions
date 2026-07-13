class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let start = 0;
        const lettersFrequency = new Map();

        for(let end = 0; end < s.length; end++) {
            const leading = s[end];
            lettersFrequency.set(leading, (lettersFrequency.get(leading) || 0) + 1);

            while(lettersFrequency.get(leading) > 1) {
                const trailing = s[start];
                lettersFrequency.set(trailing, lettersFrequency.get(trailing) - 1);
                start++;
            }

            longest = Math.max(longest, end - start + 1);
        }

        return longest;
    }
}
