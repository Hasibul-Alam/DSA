// Time: O(N*len)+O(K+E) Space: O(K)

class Solution {
    topoSort(V, adj) {
        const indegree = new Array(V).fill(0);

        for (let i = 0; i < V; i++) {
            for (let it of adj[i]) {
                indegree[it]++;
            }
        }

        const q = [];
        for (let i = 0; i < V; i++) {
            if (indegree[i] === 0) {
                q.push(i);
            }
        }

        const topo = [];
        while (q.length > 0) {
            const node = q.shift();
            topo.push(node);

            for (let it of adj[node]) {
                indegree[it]--;
                if (indegree[it] === 0) {
                    q.push(it);
                }
            }
        }

        return topo;
    }

    findOrder(dict, N, K) {
        const adj = new Array(K).fill(null).map(() => []);

        for (let i = 0; i < N - 1; i++) {
            const s1 = dict[i];
            const s2 = dict[i + 1];
            const len = Math.min(s1.length, s2.length);

            for (let ptr = 0; ptr < len; ptr++) {
                if (s1[ptr] !== s2[ptr]) {
                    adj[s1.charCodeAt(ptr) - 97].push(s2.charCodeAt(ptr) - 97);
                    break;
                }
            }
        }

        const topo = this.topoSort(K, adj);
        let ans = '';
        for (let it of topo) {
            ans += String.fromCharCode(it + 97);
        }
        return ans;
    }
}

// Main function
function main() {
    const N = 5,
        K = 4;
    const dict = ['baa', 'abcd', 'abca', 'cab', 'cad'];

    const obj = new Solution();
    const ans = obj.findOrder(dict, N, K);

    console.log(ans);
}

// Calling the main function to execute the code
main();
