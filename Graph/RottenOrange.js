// Problem: https://leetcode.com/problems/rotting-oranges/description/

// Breadth first search approach - Time: O(m*n*4) Space:O(1);

var orangesRotting = function (grid) {
    const queue = [];
    let cntFresh = 0;
    let minTime = Infinity;
    let m = grid.length;
    let n = grid[0].length;
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) queue.push([i, j, 0]);
            if (grid[i][j] == 1) cntFresh++;
        }
    }
    while (queue.length) {
        let cell = queue.shift();
        let r = cell[0];
        let c = cell[1];
        let t = cell[2];
        minTime = t;

        if (r > 0 && grid[r - 1][c] == 1) {
            grid[r - 1][c] = 2;
            queue.push([r - 1, c, t + 1]);
            cnt++;
        }
        if (r < m - 1 && grid[r + 1][c] == 1) {
            grid[r + 1][c] = 2;
            queue.push([r + 1, c, t + 1]);
            cnt++;
        }
        if (c > 0 && grid[r][c - 1] == 1) {
            grid[r][c - 1] = 2;
            queue.push([r, c - 1, t + 1]);
            cnt++;
        }
        if (c < n - 1 && grid[r][c + 1] == 1) {
            grid[r][c + 1] = 2;
            queue.push([r, c + 1, t + 1]);
            cnt++;
        }
    }
    if (cnt != cntFresh) return -1;
    return minTime;
};

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ]),
);
