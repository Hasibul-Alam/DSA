// Problem: https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1

// Depth First Search - Time: O(V+E) Space: O(V)

function dfsOfGraph(V, adj) {
    const visited = new Array(V).fill(false);
    const res = [];
    dfs(0, adj);
    return res;
    function dfs(node, adj) {
        visited[node] = true;
        res.push(node);
        for (let i = 0; i < adj[node].length; i++) {
            let currNode = adj[node][i];
            if (!visited[currNode]) dfs(currNode, adj);
        }
    }
}
