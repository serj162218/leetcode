/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    let liveNeighbors = (i, j, m, n) => {
        let neighbor = 0;
        for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
            for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
                neighbor += board[x][y] & 1;
            }
        }
        neighbor -= board[i][j] & 1;
        return neighbor;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let neighbor = liveNeighbors(i, j, board.length, board[i].length);
            if (neighbor == 3) {
                board[i][j] += 2;
            } else if (neighbor == 2 && board[i][j] == 1) {
                board[i][j] += 2;
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = board[i][j] >> 1;
        }
    }
};
// @lc code=end

