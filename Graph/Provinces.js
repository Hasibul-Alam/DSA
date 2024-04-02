// Problem: https://leetcode.com/problems/number-of-provinces/description/

// Breadth first search approach - Time: O(v^2) Space: O(v)

var findCircleNum = function (isConnected) {
    const v = isConnected.length;
    const visited = new Set();
    const queue = [];
    let provinces = 0;
    for (let i = 0; i < v; i++) {
        if (visited.has(i)) continue;
        queue.push(i);
        while (queue.length) {
            let node = queue.shift();
            visited.add(node);
            for (let j = 0; j < v; j++) {
                if (node == j || visited.has(j)) continue;
                if (isConnected[node][j] === 1) queue.push(j);
            }
        }
        provinces++;
    }
    return provinces;
};
