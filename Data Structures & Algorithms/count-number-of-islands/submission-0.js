class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let count = 0;
        let visited = new Set();

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === "1") {
                    if(this.explore(grid, r, c, visited)) {
                        count++;
                    }
                }
            }
        }

        return count;
    }

    explore(grid, row, col, visited) {
        const rowInbound = row >= 0 && row < grid.length;
        const colInbound = col >= 0 && col < grid[0].length;

        if(!rowInbound || !colInbound) return false;

        if(grid[row][col] === "0") return false;

        const key = `${row},${col}`;
        if(visited.has(key)) return false;
        visited.add(key);

        this.explore(grid, row - 1, col, visited);
        this.explore(grid, row + 1, col, visited);
        this.explore(grid, row, col - 1, visited);
        this.explore(grid, row, col + 1, visited);

        return true;
    }
}
