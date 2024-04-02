// Problem: https://leetcode.com/problems/path-with-minimum-effort/description/

// Time: O(4*n*m) Space: O(n*m)

var minimumEffortPath = function (heights) {
    const n = heights.length;
    const m = heights[0].length;
    const pq = new MinPriorityQueue({ priority: (x) => x[1] });
    const effort = Array.from({ length: n }, () => Array(m).fill(Infinity));
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    pq.enqueue([[0, 0], 0]);
    effort[0][0] = 0;
    while (!pq.isEmpty()) {
        const [r, c] = pq.dequeue().element[0];
        for (let i = 0; i < 4; i++) {
            const nr = r + directions[i][0];
            const nc = c + directions[i][1];

            if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
                const newEffort = Math.max(
                    effort[r][c],
                    Math.abs(heights[r][c] - heights[nr][nc]),
                );
                if (newEffort < effort[nr][nc]) {
                    effort[nr][nc] = newEffort;
                    pq.enqueue([[nr, nc], newEffort]);
                }
            }
        }
    }
    return effort[n - 1][m - 1];
};
