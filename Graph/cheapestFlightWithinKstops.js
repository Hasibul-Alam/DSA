// Problem: https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

// Time: O(4*n*m) Space:O(n+m)

var findCheapestPrice = function (n, flights, src, dst, k) {
    const pq = new MinPriorityQueue({ priority: (x) => x[1] });
    const adj = new Array(n).fill(null).map(() => []);
    const cost = new Array(n).fill(Infinity);
    for (let [u, v, p] of flights) {
        adj[u].push([v, p]);
    }
    cost[src] = 0;
    pq.enqueue([[src, cost[src]], 0]); // [source, totalcost, stop]
    while (!pq.isEmpty()) {
        const [[city, expense], stop] = pq.dequeue().element;
        for (let [nextCity, price] of adj[city]) {
            if (stop <= k && expense + price < cost[nextCity]) {
                cost[nextCity] = expense + price;
                pq.enqueue([[nextCity, expense + price], stop + 1]);
            }
        }
    }
    if (cost[dst] == Infinity) return -1;
    else return cost[dst];
};
