class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length
        const n = matrix[0].length;

        let left = 0;
        let right =  m * n - 1;

        while(left <= right) {
            //console.log("left, right", left, right);
            const mid = Math.floor((left + right) / 2);

            const row = Math.floor(mid / n);
            const col = mid % n

            //console.log("row, col", left, right);
            
            if(matrix[row][col] === target) {
                return true;
            }
            else if(matrix[row][col] > target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }

        return false;
    }
}
