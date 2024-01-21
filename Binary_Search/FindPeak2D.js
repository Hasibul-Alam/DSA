// Problem: https://leetcode.com/problems/find-a-peak-element-ii/

function findPeak(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let start = 0;
    let end = n - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        let max = -Infinity;
        let r = -1,
            c = -1;
        let left = -Infinity,
            right = -Infinity;

        for (let i = 0; i < m; i++) {
            if (mat[i][mid] > max) {
                max = mat[i][mid];
                r = i;
                c = mid;
            }
        }

        c - 1 < 0 ? (left = -1) : (left = mat[r][c - 1]);
        c + 1 > n - 1 ? (right = -1) : (right = mat[r][c + 1]);

        if (max > left && max > right) return [r, c];
        else if (left > max) end = mid - 1;
        else start = mid + 1;
    }
}

// Time: O(MlogN); Space: O(1);

console.log(
    findPeak([
        [1, 4],
        [3, 2],
    ]),
);

console.log(
    findPeak([
        [10, 20, 15],
        [21, 30, 14],
        [7, 16, 32],
    ]),
);
