class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        let start = 0;
        let end = heights.length - 1;

        while(start < end) {
            const height = Math.min(heights[start], heights[end]);
            const width = end - start;
            const area = height * width;
            result = Math.max(result, area);

            if(heights[start] < heights[end]) {
                start++;
            }
            else {
                end--;
            }
        }

        return result;
    }
}
