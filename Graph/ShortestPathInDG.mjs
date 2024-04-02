// Problem: https://www.codingninjas.com/studio/problems/shortest-path-in-dag_8381897?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

import { minPriorityQueue as minpq } from '../Heap/MinPriorityQueue.mjs';

// Using Djisktra algorithm - Time: O(ElogV) Space: O(V+E);

function djisktra(src, n, adj) {
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    minpq.insert(src, 0);
    while (!minpq.isEmpty()) {
        const [u, uw] = minpq.extractMin();
        for (let [v, vw] of adj[u]) {
            if (vw + uw < dist[v]) {
                dist[v] = vw + uw;
                minpq.insert(v, uw + vw);
            }
        }
    }
    return dist;
}

function shortestPath(src, n, edges) {
    const adj = new Array(n).fill(null).map(() => []);
    for (let edge of edges) {
        const [u, v, wt] = edge;
        adj[u].push([v, wt]);
    }
    const dist = djisktra(src, n, adj);
    return dist;
}

console.log(
    shortestPath(0, 6, [
        [0, 1, 2],
        [0, 4, 1],
        [4, 5, 4],
        [4, 2, 2],
        [1, 2, 3],
        [2, 3, 6],
        [5, 3, 1],
    ]),
);

// Print the shortest path - Time: O(ElogV) Space: O(V+E)

function djisktra(src, dest, n, adj) {
    const dist = new Array(n).fill(Infinity);
    const parent = Array.from({ length: n }, (_, i) => i);
    const path = [];
    dist[src] = 0;
    minpq.insert(src, 0);
    while (!minpq.isEmpty()) {
        const [u, uw] = minpq.extractMin();
        for (let [v, vw] of adj[u]) {
            if (vw + uw < dist[v]) {
                dist[v] = vw + uw;
                parent[v] = u;
                minpq.insert(v, uw + vw);
            }
        }
    }
    if (dist[dest] === Infinity) return -1;
    let node = dest;
    while (node != parent[node]) {
        path.push(node);
        node = parent[node];
    }
    path.push(src);
    return path.reverse();
}

function shortestPath(src, dest, n, edges) {
    const adj = new Array(n).fill(null).map(() => []);
    for (let edge of edges) {
        const [u, v, wt] = edge;
        adj[u].push([v, wt]);
    }
    return djisktra(src, dest, n, adj);
}

console.log(
    shortestPath(0, 3, 6, [
        [0, 1, 2],
        [0, 4, 1],
        [4, 5, 4],
        [4, 2, 2],
        [1, 2, 3],
        [2, 3, 6],
        [5, 3, 1],
    ]),
);
