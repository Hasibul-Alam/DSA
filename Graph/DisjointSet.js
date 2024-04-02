// Time: O(4 alpha) Space: O(n);

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

// const ds = createDisjointSet(7);
// ds.unionByRank(1, 2);
// ds.unionByRank(2, 3);
// ds.unionByRank(4, 5);
// ds.unionByRank(6, 7);
// ds.unionByRank(5, 6);

const ds = createDisjointSet(7);
ds.unionBySize(1, 2);
ds.unionBySize(2, 3);
ds.unionBySize(4, 5);
ds.unionBySize(6, 7);
ds.unionBySize(5, 6);

if (ds.findUlp(3) === ds.findUlp(7)) {
    console.log('Same');
} else {
    console.log('Not Same');
}

// ds.unionByRank(3, 7);
ds.unionBySize(3, 7);

if (ds.findUlp(3) === ds.findUlp(7)) {
    console.log('Same');
} else {
    console.log('Not Same');
}
