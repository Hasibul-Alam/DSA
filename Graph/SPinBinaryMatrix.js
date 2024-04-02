// Problem: https://leetcode.com/problems/shortest-path-in-binary-matrix/

// Time: O(8*n*m) Space:O(n*m)

var shortestPathBinaryMatrix = function (grid) {
    const n = grid.length;
    const m = grid[0].length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
    if (n == 1 && m == 1 && grid[n - 1][m - 1] == 0) return 1;

    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    const queue = [[0, 0, 1]]; // [row, col, distance]
    const distance = Array.from({ length: n }, () => Array(m).fill(Infinity));
    distance[0][0] = 1;

    while (queue.length > 0) {
        const [row, col, dist] = queue.shift();
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (
                newRow >= 0 &&
                newRow < n &&
                newCol >= 0 &&
                newCol < n &&
                grid[newRow][newCol] === 0 &&
                dist + 1 < distance[newRow][newCol]
            ) {
                if (newRow === n - 1 && newCol === n - 1) return dist + 1;
                distance[newRow][newCol] = 1 + dist;
                queue.push([newRow, newCol, dist + 1]);
            }
        }
    }

    return -1;
};

// Example usage:
const grid = [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid)); // Output: 4
