// Problem: https://www.codingninjas.com/studio/problems/single-source-shortest-path_8416371?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Time: O(V+E) Space: O(V+E);

function singleSrcShortestPath(src, n, m, edges) {
    const adj = new Array(n).fill(null).map(() => []);
    const dist = new Array(n).fill(Infinity);

    for (let [v1, v2] of edges) {
        adj[v1].push(v2);
        adj[v2].push(v1);
    }

    const queue = [];
    queue.push([src, 0]);
    dist[src] = 0;
    while (queue.length) {
        let [node, d] = queue.shift();
        for (let v of adj[node]) {
            if (d + 1 < dist[v]) {
                dist[v] = d + 1;
                queue.push([v, d + 1]);
            }
        }
    }
    return dist;
}

console.log(
    singleSrcShortestPath(0, 9, 10, [
        [0, 1],
        [0, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [1, 2],
        [2, 6],
        [6, 7],
        [7, 8],
        [6, 8],
    ]),
);
