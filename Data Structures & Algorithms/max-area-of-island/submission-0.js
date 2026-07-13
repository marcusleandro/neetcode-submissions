class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const visited = new Set();
        let maxArea = 0;

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                const area = this.exploreArea(grid, r, c, visited);
                if(area > maxArea) {
                    maxArea = area;
                }
            }
        }

        return maxArea;
    }

    exploreArea(grid, row, col, visited) {
        const isRowInbound = row >= 0 && row < grid.length;
        const isColInbound = col >= 0 && col < grid[0].length;        
        if(!isRowInbound || !isColInbound) return 0;

        if(grid[row][col] === 0) return 0;

        const key = `${row},${col}`;
        if(visited.has(key)) return 0;

        visited.add(key);
        let area = 1;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [dr, dc] of directions) {
            area += this.exploreArea(grid, row + dr, col + dc, visited);
        }

        return area;
    }
}
