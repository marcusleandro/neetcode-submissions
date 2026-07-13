class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map();

        for(let i = 0; i < strs.length; i++) {
            const current = strs[i];
            let found = false;
            for(let anagramsKeys of anagrams.keys()) {
                if(this.areAnagrams(anagramsKeys, current)) {
                    const anagramsKeysArray = anagrams.get(anagramsKeys);
                    anagramsKeysArray.push(current);
                    found = true;
                    break;
                }
            }

            if(!found) {
                anagrams.set(current, [current]);
            }
        }

        return [...anagrams.values()];
    }

    areAnagrams(str1, str2) {
        const map = new Map();
        for(let c of str1) {
            map.set(c, (map.get(c) || 0) + 1);
        }
        for(let c of str2) {
            map.set(c, (map.get(c) || 0) - 1);
        }
        return map.values().every(item => item === 0);
    }
}
