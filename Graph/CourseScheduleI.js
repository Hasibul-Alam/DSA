// Problem: https://leetcode.com/problems/course-schedule/description/

// DFS approach (Detcting cycle)- Time: O(V+E) Space: O(V+E)

var canFinish = function (numCourses, prerequisites) {
    const stack = [];
    const adj = new Array(numCourses).fill(null).map(() => []);
    const visited = new Array(numCourses).fill(0);
    const currPath = new Array(numCourses).fill(0);
    for (let [course, prerequisite] of prerequisites) {
        adj[prerequisite].push(course);
    }
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) topologicalDFS(i, adj, visited, stack, currPath);
    }
    function topologicalDFS(src, adj, visited, stack, currPath) {
        visited[src] = 1;
        currPath[src] = 1;
        for (let node of adj[src]) {
            if (!visited[node])
                topologicalDFS(node, adj, visited, stack, currPath);
            else if (currPath[node] == 1) return;
        }
        currPath[src] = 0;
        stack.push(src);
    }
    if (stack.length == numCourses) return true;
    return false;
};

// BFS approach - Time: O(V+E) Space: O(V+E)

var canFinish = function (numCourses, prerequisites) {
    const stack = [];
    const adj = new Array(numCourses).fill(null).map(() => []);
    const indegree = new Array(numCourses).fill(0);
    const queue = [];
    for (let [course, prerequisite] of prerequisites) {
        adj[prerequisite].push(course);
        indegree[course]++;
    }
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) queue.push(i);
    }
    while (queue.length) {
        const src = queue.shift();
        stack.push(src);
        for (let neighbor of adj[src]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    if (stack.length == numCourses) return true;
    return false;
};
