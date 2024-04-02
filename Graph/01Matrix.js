// Problem: https://leetcode.com/problems/01-matrix/description/

// BFS approach - Time: O(m*n) Space: O(m*n);

var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    const queue = [];

    // Initialize distances array with -1 (indicating unknown distance)
    const distances = Array.from({ length: m }, () => Array(n).fill(-1));

    // Enqueue all cells with value 0 and mark their distance as 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                distances[i][j] = 0;
            }
        }
    }

    // Perform BFS
    while (queue.length) {
        const [x, y] = queue.shift();

        // Explore all four directions
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the new coordinates are within bounds
            if (
                newX >= 0 &&
                newX < m &&
                newY >= 0 &&
                newY < n &&
                distances[newX][newY] === -1
            ) {
                distances[newX][newY] = distances[x][y] + 1;
                queue.push([newX, newY]);
            }
        }
    }

    return distances;
};

console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ]),
);
