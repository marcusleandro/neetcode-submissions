class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        const permutationCounter = new Map();
        for(let c of s1) {
            permutationCounter.set(c, (permutationCounter.get(c) || 0) + 1);
        }

        const windowSize = s1.length;

        const windowCounter = new Map();
        for(let i = 0; i < windowSize; i++) {
            windowCounter.set(s2[i], (windowCounter.get(s2[i]) || 0) + 1);
        }

        if(this.isEquals(windowCounter, permutationCounter)) {
            return true;
        }

        for(let i = 0; i < s2.length - windowSize; i++) {
            windowCounter.set(s2[i], windowCounter.get(s2[i]) - 1);
            if(windowCounter.get(s2[i]) === 0) {
                windowCounter.delete(s2[i]);
            }
            windowCounter.set(s2[i + windowSize], (windowCounter.get(s2[i + windowSize]) || 0) + 1);

            if(this.isEquals(windowCounter, permutationCounter)) {
                return true;
            }
        }

        return false;
    }

    isEquals(windowCounter, permutationCounter) {
        if(windowCounter.size !== permutationCounter.size) return false;
        for(let [key, value] of permutationCounter) {
            if(windowCounter.get(key) !== value) return false;
        }
        return true;
    }
}
