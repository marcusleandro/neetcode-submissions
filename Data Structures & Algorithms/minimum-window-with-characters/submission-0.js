class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let result = "";
        let length = Infinity;

        const tFrequency = new Map();
        for(let c of t) {
            tFrequency.set(c, (tFrequency.get(c) || 0) + 1);
        }

        const windowFrequency = new Map();
        let start = 0;

        for(let end = 0; end < s.length; end++) {
            const trailingChar = s[end];
            windowFrequency.set(trailingChar, ( windowFrequency.get(trailingChar) || 0) + 1);

            while(windowFrequency.get(s[start]) > (tFrequency.get(s[start]) || 0)) {
                windowFrequency.set(s[start], windowFrequency.get(s[start]) - 1);
                start++;
            }

            if(this.isMapWindowContains(windowFrequency, tFrequency)) {
                const size = end - start + 1;
                if(size < length) {
                    result = s.substring(start, end + 1);
                    length = size;
                }
            }
        }

        return result;
    }

    isMapWindowContains(window, frequency) {
        for(let [key, value] of frequency) {
            const windowValue = window.get(key) || 0;
            if(value > windowValue) {
                return false;
            }
        }
        return true;
    }
}
