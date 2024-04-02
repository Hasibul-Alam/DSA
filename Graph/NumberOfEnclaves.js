// Problem: https://leetcode.com/problems/number-of-enclaves/description/

// DFS approach - Time: O(m*n) Space: O(max(m,n))

var numEnclaves = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                (i == 0 || i == m - 1 || j == 0 || j == n - 1) &&
                grid[i][j] == 1
            ) {
                dfs(i, j);
            }
        }
    }

    // number of enclaves
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) count += 1;
        }
    }
    return count;

    function dfs(r, c) {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] != 1) return;
        grid[r][c] = 'S';
        for (let [dr, dc] of directions) {
            nr = r + dr;
            nc = c + dc;
            dfs(nr, nc);
        }
    }
};
