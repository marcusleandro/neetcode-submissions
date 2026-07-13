class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        
        const result = [];          //             P        A
        //const visited = new Set(); // { "r,c": [boolean, boolean] }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                const [isPacific, isAtlantic] = this.explore(heights, r, c, new Set())
                if(isPacific && isAtlantic) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }

    explore(heights, row, col, visited) {        
        const key = `${row},${col}`;
        if(visited.has(key)) {
            return [false, false];
        }
        visited.add(key);

        if(row < 0 || col < 0) {    // >> pacific
            return [true, false];
        }
        if(row >= heights.length || col >= heights[0].length) { // >> atlantic
            return [false, true];
        }

        let result = [false, false];

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            const isRowOut = newRow < 0 || newRow >= heights.length;
            const iscolOut = newCol < 0 || newCol >= heights[0].length;

            if(isRowOut || iscolOut || heights[row][col] >= heights[newRow][newCol]) {
                const [isPacific, isAtlantic] = this.explore(heights, newRow, newCol, visited);
                result[0] = result[0] || isPacific;
                result[1] = result[1] || isAtlantic;

                if(result[0] && result[1]) {
                    return result;
                }
            }
        }

        return result;
    }
}
