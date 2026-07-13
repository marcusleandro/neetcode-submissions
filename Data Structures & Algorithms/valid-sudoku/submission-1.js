class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        for(let r = 0; r < ROWS; r++) {
            const row = board[r];
            if(!this.isValidRow(row)) {
                return false;
            }
        }

        for(let c = 0; c < COLS; c++) {
            if(!this.isValidCol(board, c)) {
                return false;
            }
        }

        for(let r = 0; r < ROWS; r+=3) {
            for(let c = 0; c < COLS; c+=3) {
                if(!this.isValidGrid(board, r, c)) {
                    return false;
                }
            }
        }

        return true;
    }

    isValidGrid(board, startRow, startCol) {
        const numbers = new Set();

        for(let r = startRow; r < startRow + 3; r++) {
            for(let c = startCol; c < startCol + 3; c++) {
                const value = board[r][c];
                if(value !== '.') {
                    if(numbers.has(value)) {
                        return false;
                    }
                    numbers.add(value);
                }  
            }
        }

        return true;
    }

    isValidCol(board, col) {
        const numbers = new Set();
        for(let r = 0; r < board.length; r++) {
            const value = board[r][col];
             if(value !== '.') {
                if(numbers.has(value)) {
                    return false;
                }
                numbers.add(value);
             }
        }
        return true;
    }

    isValidRow(row) {
        const numbers = new Set();
        for(let i = 0; i < row.length; i++) {
            const value = row[i];
            if(value !== '.') {
                if(numbers.has(value)) {
                    return false;
                }
                numbers.add(value);
            }
        }
        return true;
    }
}
