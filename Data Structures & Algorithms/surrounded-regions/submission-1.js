class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        for(let r = 0; r < ROWS; r++) {
            this.change(board, r, 0);
            this.change(board, r, COLS - 1);
        }
        for(let c = 0; c < COLS; c++) {
            this.change(board, 0, c);
            this.change(board, ROWS - 1, c);
        }

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(board[r][c] === 'O') {
                    board[r][c] = 'X';
                }
                else if(board[r][c] === '*') {
                    board[r][c] = 'O';
                }
            }
        }
    }

    change(board, row, col) {
        const isRowOutbound = row < 0 || row >= board.length;
        const isColOutbound = col < 0 || col >= board[0].length;

        if(isRowOutbound || isColOutbound || board[row][col] !== 'O') {
            return;
        }

        board[row][col] = "*";

        this.change(board, row + 1, col);
        this.change(board, row - 1, col);
        this.change(board, row, col + 1);
        this.change(board, row, col - 1);
    }

    explore(board, row, col, visited) {
        if(row === 0 || row === board.length - 1) return true;
        if(col === 0 || col === board[0].length - 1) return true;

        const key = `${row},${col}`;
        if(visited.has(key)) return false;
        visited.add(key);

        //console.log(`key=${key}`);

        let result = false;
        const directions = [[1,0], [-1,0], [0, 1], [0, -1]];

        for(let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            //console.log(`newRow=${newRow}, newCol=${newCol} | rowLength=${board.length}, colLength=${board[0].length}`);

            const isRowInbound = newRow >= 0 && newRow < board.length;
            const isColInbound = newCol >= 0 && newCol < board[0].length;

            if(isRowInbound && isColInbound && board[newRow][newCol] === 'O') {
                result = result || this.explore(board, newRow, newCol, visited);
            }
        }

        //console.log(`row=${row}, col=${col}`);

        if(!result) {
            board[row][col] = 'X';
        }

        return result;
    }
}
