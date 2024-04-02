// Time: O(ElogE) Space: O(V+E)

function prims(adj) {
    const pq = new MinPriorityQueue({ priority: (x) => x[1] });
    const visited = new Array(adj.length).fill(0);
    pq.enqueue([0, 0]);
    let sum = 0;
    while (!pq.isEmpty()) {
        const [u, w] = pq.dequeue().element;
        if (visited[u]) continue;
        visited[u] = 1;
        sum += w;
        for (let [v, wt] of adj[u]) {
            if (!visited[v]) {
                pq.enqueue([v, wt]);
            }
        }
    }
    return sum;
}
