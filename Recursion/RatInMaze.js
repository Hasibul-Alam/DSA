// Problem: https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

// Time: O(4^m*n)  Space: (m*n)

function findPathHelper(i, j, a, n, ans, move, vis) {
    if (i === n - 1 && j === n - 1) {
        ans.push(move);
        return;
    }

    // Downward
    if (i + 1 < n && !vis[i + 1][j] && a[i + 1][j] === 1) {
        vis[i][j] = 1;
        findPathHelper(i + 1, j, a, n, ans, move + 'D', vis);
        vis[i][j] = 0;
    }

    // Left
    if (j - 1 >= 0 && !vis[i][j - 1] && a[i][j - 1] === 1) {
        vis[i][j] = 1;
        findPathHelper(i, j - 1, a, n, ans, move + 'L', vis);
        vis[i][j] = 0;
    }

    // Right
    if (j + 1 < n && !vis[i][j + 1] && a[i][j + 1] === 1) {
        vis[i][j] = 1;
        findPathHelper(i, j + 1, a, n, ans, move + 'R', vis);
        vis[i][j] = 0;
    }

    // Upward
    if (i - 1 >= 0 && !vis[i - 1][j] && a[i - 1][j] === 1) {
        vis[i][j] = 1;
        findPathHelper(i - 1, j, a, n, ans, move + 'U', vis);
        vis[i][j] = 0;
    }
}

var findPath = function (m, n) {
    var ans = [];
    var vis = Array.from({ length: n }, () => Array(n).fill(0));

    if (m[0][0] === 1) {
        findPathHelper(0, 0, m, n, ans, '', vis);
    }
    return ans;
};

// Reduce Line of code

function solve(i, j, a, n, ans, move, vis, di, dj) {
    if (i === n - 1 && j === n - 1) {
        ans.push(move);
        return;
    }
    const directions = 'DLRU';
    for (let ind = 0; ind < 4; ind++) {
        const nexti = i + di[ind];
        const nextj = j + dj[ind];
        if (
            nexti >= 0 &&
            nextj >= 0 &&
            nexti < n &&
            nextj < n &&
            !vis[nexti][nextj] &&
            a[nexti][nextj] === 1
        ) {
            vis[i][j] = 1;
            solve(nexti, nextj, a, n, ans, move + directions[ind], vis, di, dj);
            vis[i][j] = 0;
        }
    }
}

var findPath = function (m, n) {
    const ans = [];
    const vis = Array.from({ length: n }, () => Array(n).fill(0));
    const di = [1, 0, 0, -1];
    const dj = [0, -1, 1, 0];
    if (m[0][0] === 1) {
        solve(0, 0, m, n, ans, '', vis, di, dj);
    }
    return ans;
};
