// Problem: https://leetcode.com/problems/combination-sum-iii/

// Recursive Approach - Time: O(2^9*k) Space: O(log9+m) m - space for storing valid combinations

var combinationSum3 = function (k, n) {
    const res = [];
    function findCombination(s, k, n, sum, subset) {
        if (subset.length === k) {
            if (sum === n) res.push([...subset]);
            return;
        }
        if (s <= 9 && sum + s <= n) {
            subset.push(s);
            findCombination(s + 1, k, n, sum + s, subset);
            subset.pop();
            findCombination(s + 1, k, n, sum, subset);
        }
    }
    findCombination(1, k, n, 0, []);
    return res;
};
