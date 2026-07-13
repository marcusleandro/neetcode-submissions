class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        while(left <= right) {
            const middle = Math.floor((left + right) / 2);
            const hours = this.getHours(piles, middle);

            if(hours > h) {
                left = middle + 1;
            }
            else {
                result = middle;
                right = middle - 1;
            }
        }

        return result;
    }

    getHours(piles, k) {
        let hours = 0;
        for(let pile of piles) {
            const time = Math.floor(pile / k) + (pile % k > 0 ? 1 : 0);
            hours += time;
        }
        return hours;
    }
}
