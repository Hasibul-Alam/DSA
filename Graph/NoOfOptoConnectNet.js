// Problem: https://leetcode.com/problems/number-of-operations-to-make-network-connected/description/

// Time: O(E*4α+V*4α) Space: O(2V)

var makeConnected = function (n, connections) {
    let nxe = (nc = 0);
    const ds = createDisjointSet(n);

    // count no of extra edge
    for (let [u, v] of connections) {
        if (ds.findUlp(u) == ds.findUlp(v)) nxe++;
        ds.unionBySize(u, v);
    }
    // count no of component
    for (let i = 0; i < n; i++) {
        if (ds.parent[i] == i) nc++;
    }
    if (nxe >= nc - 1) return nc - 1;
    return -1;
};

function createDisjointSet(n) {
    const parent = new Array(n).fill().map((_, i) => i);
    const size = new Array(n).fill(1);
    function findUlp(node) {
        if (parent[node] == node) return node;
        const ulp = findUlp(parent[node]);
        parent[node] = ulp;
        return parent[node];
    }
    function unionBySize(u, v) {
        const ulpU = findUlp(u);
        const ulpV = findUlp(v);
        if (ulpU == ulpV) return;
        if (size[ulpU] >= size[ulpV]) {
            parent[ulpV] = ulpU;
            size[ulpU] += size[ulpV];
        } else {
            parent[ulpU] = ulpV;
            size[ulpV] += size[ulpV];
        }
    }
    return {
        parent,
        findUlp,
        unionBySize,
    };
}
