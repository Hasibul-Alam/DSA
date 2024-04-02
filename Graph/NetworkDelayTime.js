// Problem: https://leetcode.com/problems/network-delay-time/description/

// Time: O(Elogn) Space: O(E + n);

var networkDelayTime = function (times, n, k) {
    const pq = new MinPriorityQueue({ priority: (x) => x[1] });
    const adj = new Array(n).fill(null).map(() => []);
    for (let [u, v, t] of times) {
        adj[u - 1].push([v - 1, t]); // Adjusting indices to start from 0
    }
    const minTime = new Array(n).fill(Infinity);
    minTime[k - 1] = 0; // Adjusting indices to start from 0
    pq.enqueue([k - 1, 0]); // Adjusting indices to start from 0
    while (!pq.isEmpty()) {
        let [u, t] = pq.dequeue().element;
        for (let [v, nt] of adj[u]) {
            if (t + nt < minTime[v]) {
                minTime[v] = t + nt;
                pq.enqueue([v, t + nt]);
            }
        }
    }
    const maxTime = Math.max(...minTime);
    return maxTime === Infinity ? -1 : maxTime;
};
