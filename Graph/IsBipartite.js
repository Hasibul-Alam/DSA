// Problem: https://leetcode.com/problems/is-graph-bipartite/description/

// DFS approach - Time: O(V+E) Space: O(V)

var isBipartite = function (graph) {
    let n = graph.length;
    const color = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (color[i] == -1) {
            if (!dfs(i, 0, color)) return false;
        }
    }
    return true;

    function dfs(s, col, color) {
        color[s] = col;
        for (let node of graph[s]) {
            if (color[node] == -1) {
                if (!dfs(node, 1 - col, color)) return false;
            } else if (color[node] === col) return false;
        }
        return true;
    }
};
