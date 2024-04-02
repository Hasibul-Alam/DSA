// Problem: https://leetcode.com/problems/surrounded-regions/description/

// DFS approach - Time: O(m*n) Space: O(max(m,n));

var solve = function (board) {
    if (!board || board.length === 0) return;

    const m = board.length;
    const n = board[0].length;

    // Define the directions for DFS traversal
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // Perform DFS traversal starting from border 'O' cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                (i === 0 || i === m - 1 || j === 0 || j === n - 1) &&
                board[i][j] === 'O'
            ) {
                dfs(board, i, j);
            }
        }
    }

    // Flip surrounded 'O' cells to 'X'
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'S') {
                board[i][j] = 'O';
            }
        }
    }

    // Helper function for DFS traversal
    function dfs(board, i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') {
            return;
        }

        // Mark the current cell as safe
        board[i][j] = 'S';

        // Traverse in all directions
        for (const [di, dj] of directions) {
            dfs(board, i + di, j + dj);
        }
    }
};
