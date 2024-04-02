// Problem: https://leetcode.com/problems/subsets/description/

// Recursive Approach - Time: O(2^n) Space: O(2^n)

var subsets = function (nums) {
    const subSet = [];
    function generateSubset(nums, i, path) {
        if (i === nums.length) {
            subSet.push([...path]);
            return;
        }
        generateSubset(nums, i + 1, [...path, nums[i]]);
        generateSubset(nums, i + 1, path);
    }
    generateSubset(nums, 0, []);
    return subSet;
};

console.log(subsets([1, 2, 3]));

// Iterative Approach - Time: O(n*2^n) Space:O(2^n)

var subsets = function (nums) {
    let output = [[]];
    for (let num of nums) {
        let len = output.length;
        for (let i = 0; i < len; i++) {
            output.push([...output[i], num]);
        }
    }
    return output;
};
