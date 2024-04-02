// Problem: https://leetcode.com/problems/combination-sum-ii/

// Recursive Approach

// Time Complexity:O(2^n*k)

// Reason: Assume if all the elements in the array are unique then
// the no. of subsequence you will get will be O(2^n).
// we also add the ds to our ans when we reach the base case
// that will take “k”//average space for the ds.

// Space Complexity:O(k*x)

// Reason: if we have x combinations then space will be x*k where k is
// the average length of the combination.

var combinationSum2 = function (candidates, target) {
    const ans = [];
    const ds = [];
    candidates.sort((a, b) => a - b);

    const findCombination = (ind, target) => {
        if (target === 0) {
            ans.push([...ds]);
            return;
        }
        for (let i = ind; i < candidates.length; i++) {
            if (i > ind && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if (candidates[i] > target) {
                break;
            }
            ds.push(candidates[i]);
            findCombination(i + 1, target - candidates[i]);
            ds.pop();
        }
    };

    findCombination(0, target);
    return ans;
};

// Recursive approach - Applicable when duplicate combinations are allowed;

var combinationSum2 = function (candidates, target) {
    const combinations = [];
    findCombinations(candidates, 0, target, []);
    function findCombinations(arr, idx, target, ds) {
        if (idx == arr.length) {
            if (target == 0) combinations.push(ds);
            return;
        }
        if (arr[idx] <= target)
            findCombinations(arr, idx + 1, target - arr[idx], [
                ...ds,
                arr[idx],
            ]);
        findCombinations(arr, idx + 1, target, ds);
    }
    return combinations;
};

// Iterative approach

var combinationSum2 = function (candidates, target) {
    const stack = [[0, 0, []]]; // [start, comboSum, combo]
    const res = [];
    candidates.sort((a, b) => a - b);

    while (stack.length > 0) {
        const [start, comboSum, combo] = stack.pop();

        if (comboSum === target) {
            res.push([...combo]);
        }

        for (let i = start; i < candidates.length; i++) {
            if (i !== start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if (comboSum + candidates[i] <= target) {
                const newCombo = [...combo, candidates[i]];
                stack.push([i + 1, comboSum + candidates[i], newCombo]);
            }
        }
    }

    return res;
};
