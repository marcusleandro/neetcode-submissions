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
}
