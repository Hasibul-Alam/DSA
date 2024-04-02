// Problem: https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/

// Time: O(E logn) Space: O(E + n)

var countPaths = function (n, roads) {
    const pq = new MinPriorityQueue({ priority: (x) => x[1] });
    const time = new Array(n).fill(Infinity);
    const ways = new Array(n).fill(0);
    const adj = new Array(n).fill(null).map(() => []);
    const mod = Math.pow(10, 9) + 7;
    for (let [u, v, t] of roads) {
        adj[u].push([v, t]);
        adj[v].push([u, t]);
    }
    time[0] = 0;
    ways[0] = 1;
    pq.enqueue([0, 0]);
    while (!pq.isEmpty()) {
        let [u, t] = pq.dequeue().element;
        for (let [v, nt] of adj[u]) {
            if (t + nt < time[v]) {
                time[v] = t + nt;
                ways[v] = ways[u] % mod;
                pq.enqueue([v, t + nt]);
            } else if (t + nt == time[v]) {
                ways[v] = (ways[v] + ways[u]) % mod;
            }
        }
    }
    return ways[n - 1] % mod;
};
