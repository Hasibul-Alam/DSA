// Problem: https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1

// Breadth first search traversal (One component)- Time:O(V+E) Space: O(V)

function bfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    const queue = [];
    const bfs = [];
    queue.push(0);
    while (queue.length) {
        let node = queue.shift();
        if (visited[node]) continue;
        visited[node] = true;
        bfs.push(node);
        queue.push(...adj[node]);
    }
    return bfs;
}

console.log(bfsOfGraph(5, [[1, 2, 3], [], [4], [], []]));
