class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 0) {
                    this.explore(grid, r, c, new Set(), 0);
                }
            }
        }
    }

    explore(grid, row, col, visited, distance) {
        const queue = [[row, col, distance]];

        while(queue.length) {
            const [r, c, d] = queue.shift();

            const key = `${r},${c}`;
            if(visited.has(key)) continue;
            visited.add(key);

            if(grid[r][c] > 0) {
                grid[r][c] = Math.min(grid[r][c], d);
            }

            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for(let [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;

                const isRowInbound = newRow >= 0 && newRow < grid.length;
                const isColInbound = newCol >= 0 && newCol < grid[0].length;

                 if(isRowInbound && isColInbound && grid[newRow][newCol] > 0) {
                    queue.push([newRow, newCol, d + 1]);
                 }
            }
        }
    }
}
