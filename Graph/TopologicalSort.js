// Topological sort - Time: O(V+E) Space:O(V)

function topologicalSort(v, adj) {
    function dfs(s, adj, visited, stack) {
        visited[s] = true;
        for (let node of adj[s]) {
            if (!visited[node]) dfs(node, adj, visited, stack);
        }
        stack.push(s);
    }

    const visited = new Array(v).fill(false);
    const res = [];
    const stack = [];
    for (let i = 0; i < v; i++) {
        if (!visited[i]) dfs(i, adj, visited, stack);
    }

    while (stack.length) {
        res.push(stack.pop());
    }

    return res;
}

console.log(topologicalSort(6, [[], [], [3], [1], [0, 1], [0, 2]]));
