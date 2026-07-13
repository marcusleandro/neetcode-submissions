class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0; 
        let left = 0;
        const frequencies = new Map();

        for(let right = 0; right < s.length; right++) {
            const trailingChar = s[right];
            frequencies.set(trailingChar, (frequencies.get(trailingChar) || 0) + 1);

            while(this.sumNonMax(frequencies) > k) {
                const leadingChar = s[left];
                frequencies.set(leadingChar, frequencies.get(leadingChar) - 1);
                left++;
            }

            let current = frequencies
                .values()
                .reduce((acc, qty) => acc + qty, 0);

            longest = Math.max(longest, current)
        }

        return longest;
    }

    sumNonMax(frequencies) {
        let max = 0;
        let charMax = null;

        for(let [key, value] of frequencies) {
            if(value > max) {
                max = value;
                charMax = key;
            }
        }

        let sum = 0;

        for(let [key, value] of frequencies) {
            if(key !== charMax) {
                sum += value;
            }
        }

        return sum;
    }
}
