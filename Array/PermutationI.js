// Problem: https://leetcode.com/problems/permutations/description/

// Approach 1: Time: O(n!*n) Space: O(n!*n)

var permute = function (nums) {
    function permutation(nums, set, temp) {
        if (temp.length == n) {
            res.push([...temp]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!set.has(nums[i])) {
                set.add(nums[i]);
                temp.push(nums[i]);
                permutation(nums, set, temp);
                set.delete(nums[i]);
                temp.pop();
            }
        }
    }
    let res = [];
    let set = new Set();
    let temp = [];
    let n = nums.length;
    permutation(nums, set, temp);
    return res;
};

// Approach 2: Time: O(n!*n) Space: O(n!*n)

var permute = function (nums) {
    function permutation(nums, idx) {
        if (idx === nums.length) {
            res.push([...nums]);
            return;
        }
        for (let i = idx; i < nums.length; i++) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            permutation(nums, idx + 1);
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
        }
    }
    const res = [];
    permutation(nums, 0);
    return res;
};
