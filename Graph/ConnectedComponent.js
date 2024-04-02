// Problem: https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/

// Breadth First Search (DFS) Approach - Time: O(v+e) Space: O(v);

function findNoOfComponent(n, list) {
    let map = new Map();
    for (let j = 0; j < list.length; j++) {
        if (map.has(list[j][0])) map.get(list[j][0]).push(list[j][1]);
        else map.set(list[j][0], [list[j][1]]);
        if (map.has(list[j][1])) map.get(list[j][1]).push(list[j][0]);
        else map.set(list[j][1], [list[j][0]]);
    }
    const visited = new Set();
    let ncomp = 0;
    const queue = [];
    for (let node of map.keys()) {
        if (visited.has(node)) continue;
        queue.push(node);
        while (queue.length) {
            let vertex = queue.shift();
            if (!visited.has(vertex)) {
                visited.add(vertex);
                queue.push(...map.get(vertex));
            }
        }
        ncomp++;
    }
    return ncomp;
}

console.log(
    findNoOfComponent(
        (n = 5),
        (edges = [
            [0, 1],
            [0, 5],
            [1, 2],
            [3, 4],
        ]),
    ),
);

console.log(
    findNoOfComponent(
        (n = 5),
        (edges = [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
        ]),
    ),
);
