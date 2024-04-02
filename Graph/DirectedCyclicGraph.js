// Problem: https://www.codingninjas.com/studio/problems/detect-cycle-in-a-directed-graph-_920545?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// DFS approach - Time: O(V+E) Space: O(V);

function directedGraph(adj) {
    const n = adj.length;
    const visited = new Array(n).fill(0);
    const currPath = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            if (isCyclic(i, adj, visited, currPath)) return true;
        }
    }
    return false;
    function isCyclic(src, adj, visited, currPath) {
        visited[src] = 1;
        currPath[src] = 1;
        for (let node of adj[src]) {
            if (!visited[node]) {
                if (isCyclic(node, adj, visited, currPath)) return true;
            } else if (currPath[node] == 1) return true;
        }
        currPath[src] = 0;
        return false;
    }
}

console.log(
    directedGraph([[], [2], [3], [4, 7], [5], [6], [], [5], [9], [10], [8]]),
);
