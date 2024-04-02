// Problem: https://leetcode.com/problems/find-eventual-safe-states/description/

// Time: O(V+E)+O(N*logN), N - no of safe node; Space:O(V)

var eventualSafeNodes = function (graph) {
    const safeNodes = [];
    const graphRev = new Array(graph.length).fill(null).map(() => []);
    const indegree = new Array(graph.length).fill(0);
    const queue = [];

    for (let node = 0; node < graph.length; node++) {
        for (let edge of graph[node]) {
            graphRev[edge].push(node);
            indegree[node]++;
        }
    }

    for (let v = 0; v < graphRev.length; v++) {
        if (indegree[v] == 0) queue.push(v);
    }
    while (queue.length) {
        let node = queue.shift();
        safeNodes.push(node);
        for (let v of graphRev[node]) {
            indegree[v]--;
            if (indegree[v] == 0) queue.push(v);
        }
    }

    return safeNodes.sort((a, b) => a - b);
};
