class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const queue = [];

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 2) {
                    queue.push([r, c]);
                }
            }
        }

        const minutes = this.bfs(grid, queue);

         for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1) {
                    return -1;
                }
            }
         }

        return minutes;
    }

    bfs(grid, queue) {
        let time = 0;
        let levelCount = queue.length;

        while(queue.length) {
            if(levelCount === 0) {
                levelCount = queue.length;
                time++;
            }

            const [row, col] = queue.shift();
            levelCount--;

            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for(let [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                const isRowInbound = newRow >= 0 && newRow < grid.length;
                const isColInbound = newCol >= 0 && newCol < grid[0].length;

                if(isRowInbound && isColInbound && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                }
            }
        }

        return time;
    }
}
