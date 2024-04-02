// Problem: https://leetcode.com/problems/combination-sum/

// Recursive approach - Time: O(2^t * k) Space: O(k*x) x - no of combinations
var combinationSum = function (candidates, target) {
    const combinations = [];
    findCombinations(candidates, 0, target, []);
    function findCombinations(arr, idx, target, ds) {
        if (idx == arr.length) {
            if (target == 0) combinations.push(ds);
            return;
        }
        if (arr[idx] <= target)
            findCombinations(arr, idx, target - arr[idx], [...ds, arr[idx]]);
        findCombinations(arr, idx + 1, target, ds);
    }
    return combinations;
};

// Iterative approach - Time: O(2^t*k) Space: O(k*x)

var combinationSum = function (candidates, target) {
    const result = [];
    const stack = [];
    const n = candidates.length;
    let index = 0;
    let sum = 0;
    while (stack.length > 0 || index < n) {
        if (sum === target) {
            result.push(stack.slice());
        }

        if (index < n && sum < target) {
            stack.push(candidates[index]);
            sum += candidates[index];
        } else {
            const last = stack.pop();
            sum -= last;
            index = candidates.indexOf(last) + 1;
        }
    }

    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
