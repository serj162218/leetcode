/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    //recording every value which is not '.' in set(it's ok to use map), if meet the value again, return false
    let set = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== ".") {
                let row = `row:${i}-${board[i][j]}`;
                let col = `col:${j}-${board[i][j]}`;
                let box = `box:${i - (i % 3)}-${j - (j % 3)} - ${board[i][j]}`;
                if (set.has(row) || set.has(col) || set.has(box)) return false;
                set.add(row);
                set.add(col);
                set.add(box);
            }
        }
    }
    return true;
};

/*
    let auth = (row, column, value) => {
        //checking row
        for (let i = 0; i < board.length; i++) {
            if (board[i][column] === value && i !== row) return false;
        }
        //checking column

        for (let j = 0; j < board.length; j++) {
            if (board[row][j] === value && j !== column) return false;
        }
        //checking 3x3 neighbors

        for (let i = row - (row % 3); i < row - (row % 3) + 3; i++) {
            for (let j = column - (column % 3); j < column - (column % 3) + 3; j++) {
                if (board[i][j] === value && i !== row && j !== column) return false;
            }
        }

        return true;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== ".") {
                if (auth(i, j, board[i][j]) === false) return false;
            }
        }
    }
    return true;
*/
// @lc code=end

