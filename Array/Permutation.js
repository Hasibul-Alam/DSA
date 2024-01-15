// Find all the permutations of an array.
// Problem: https://leetcode.com/problems/permutations-ii/description/
function UniquePermutations(arr, idx, n, res) {
    if (idx === n) {
        let ds = arr.slice(0);
        res.push(ds);
        return;
    }
    let hashset = new Set();
    for (let i = idx; i < n; i++) {
        if (hashset.has(arr[i])) continue;
        hashset.add(arr[i]);
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        UniquePermutations(arr, idx + 1, n, res);
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
}

// Time: O(n!*n) Space: O(n - depth of the recursion); Res- O(n!*n) is not considered as extra space.

let res = [];
let arr = [1, 1, 2];
UniquePermutations(arr, 0, arr.length, res);
console.log(res);

// Find all the permutations of an array

function permutation(arr, idx, n, res) {
    if (idx === n) {
        let ds = arr.slice(0);
        res.push(ds);
        return;
    }
    for (let i = idx; i < n; i++) {
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
        permutation(arr, idx + 1, n, res);
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
}

// Time: O(n!*n) Space: O(n - depth of the recursion); Res- O(n!*n) is not considered as extra space.

// let res = [];
// let arr = [1, 1, 2];
// permutation(arr, 0, arr.length, res);
// console.log(res);
