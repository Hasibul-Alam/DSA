// Problem: https://www.codingninjas.com/studio/problems/detect-cycle-in-an-undirected-graph-_758967?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Breadth first search approach - Time: O(v * (v+e)) Space: O(v)

function detectCycle(v, adj) {
    const visited = new Array(v).fill(false);

    for (let i = 0; i < v; i++) {
        if (!visited[i] && isCycle(i)) {
            return true;
        }
    }

    return false;

    function isCycle(s) {
        const queue = [];
        queue.push([s, -1]); // Start BFS from node s with parent -1
        visited[s] = true;

        while (queue.length) {
            const [node, parent] = queue.shift();

            for (const neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push([neighbor, node]); // Mark neighbor with its parent
                } else if (neighbor !== parent) {
                    return true; // Found a back edge, indicating a cycle
                }
            }
        }

        return false;
    }
}

console.log(detectCycle(4, [[], [2], [1, 3], [2, 1]]));

// Depth First search approach - Time: O(v * (v+e)) Space: O(v)

function detectCycle(v, adj) {
    const visited = new Array(v).fill(false);
    for (let i = 0; i < v; i++) {
        if (!visited[i]) {
            if (isCycle(i, -1)) return true; // Start DFS from node i
        }
    }
    return false;

    function isCycle(node, parent) {
        visited[node] = true;
        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                if (isCycle(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return true; // Found a back edge
            }
        }
        return false;
    }
}

console.log(detectCycle(4, [[], [2], [1, 3], [2, 1]]));
