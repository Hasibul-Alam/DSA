// Time:  O(N+E) + O(E logE) + O(E*4α*2) Space: O(N) + O(N) + O(E)

function createDisjointSet(n) {
    const rank = new Array(n + 1).fill(0);
    const parent = new Array(n + 1).fill().map((_, i) => i);
    const size = new Array(n + 1).fill(1);

    function findUlp(node) {
        if (parent[node] == node) return node;
        const ulp = findUlp(parent[node]);
        parent[node] = ulp;
        return parent[node];
    }

    function unionByRank(u, v) {
        const ulpU = findUlp(u);
        const ulpV = findUlp(v);
        if (ulpU === ulpV) return;
        if (rank[ulpU] > rank[ulpV]) {
            parent[ulpV] = ulpU;
        } else if (rank[ulpV] > rank[ulpU]) {
            parent[ulpU] = ulpV;
        } else {
            parent[ulpV] = ulpU;
            rank[ulpU]++;
        }
    }

    function unionBySize(u, v) {
        const ulpU = findUlp(u);
        const ulpV = findUlp(v);
        if (ulpU === ulpV) return;
        if (size[ulpU] >= size[ulpV]) {
            parent[ulpV] = ulpU;
            size[ulpU] += size[ulpV];
        } else if (size[ulpV] > size[ulpU]) {
            parent[ulpU] = ulpV;
            size[ulpV] += size[ulpU];
        }
    }
    return {
        findUlp,
        unionByRank,
        unionBySize,
    };
}

function kruskal(adj) {
    const edges = [];
    for (let u = 0; u < adj.length; u++) {
        for (let [v, wt] of adj[u]) {
            edges.push([wt, [u, v]]);
        }
    }
    edges.sort((a, b) => a[0] - b[0]);
    const ds = createDisjointSet(adj.length);
    let mst = 0;
    for (let i = 0; i < edges.length; i++) {
        let [wt, [u, v]] = edges[i];
        if (ds.findUlp(u) !== ds.findUlp(v)) {
            mst += wt;
            ds.unionBySize(u, v);
        }
    }
    return mst;
}
// {{0, 1, 2}, {0, 2, 1}, {1, 2, 1}, {2, 3, 2}, {3, 4, 1}, {4, 2, 2}}
const adj = [
    [
        [1, 2],
        [2, 1],
    ],
    [[2, 1]],
    [[3, 2]],
    [[4, 1]],
    [[2, 2]],
];

console.log(kruskal(adj));
