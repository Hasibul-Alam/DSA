// Problem: https://leetcode.com/problems/flood-fill/description/

// Breadth first search Approach - Time: O(m*n*4) Space: O(1);

var floodFill = function (image, sr, sc, color) {
    if (image[sr][sc] == color) return image;
    const queue = [];
    const m = image.length;
    const n = image[0].length;
    queue.push([sr, sc, image[sr][sc]]);
    image[sr][sc] = color;
    while (queue.length) {
        let cell = queue.shift();
        let r = cell[0];
        let c = cell[1];
        let cellColor = cell[2];

        if (r > 0 && image[r - 1][c] == cellColor) {
            queue.push([r - 1, c, image[r - 1][c]]);
            image[r - 1][c] = color;
        }
        if (r < m - 1 && image[r + 1][c] == cellColor) {
            queue.push([r + 1, c, image[r + 1][c]]);
            image[r + 1][c] = color;
        }
        if (c > 0 && image[r][c - 1] == cellColor) {
            queue.push([r, c - 1, image[r][c - 1]]);
            image[r][c - 1] = color;
        }
        if (c < n - 1 && image[r][c + 1] == cellColor) {
            queue.push([r, c + 1, image[r][c + 1]]);
            image[r][c + 1] = color;
        }
    }
    return image;
};
