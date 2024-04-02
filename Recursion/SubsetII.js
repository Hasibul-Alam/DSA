// Problem: https://leetcode.com/problems/subsets-ii/description/

// Brute force approach -

// Time: O( 2^n *(k log (x) )). 2^n  for generating every subset
// and k* log( x)  to insert every combination of average length k
// in a set of size x
// Space: O(2^n * k)

var subsetsWithDup = function (nums) {
    let ans = [];
    let res = new Set();

    function fun(index, ds) {
        if (index === nums.length) {
            ds.sort((a, b) => a - b);
            res.add(ds.join(','));
            return;
        }
        ds.push(nums[index]);
        fun(index + 1, ds);
        ds.pop();
        fun(index + 1, ds);
    }

    fun(0, []);

    res.forEach((item) => {
        ans.push(item.split(',').map(Number));
    });

    return ans;
};

// Optimal Approach(Recursive) - Time: O(2^n * k) Space: O(2^n * k)

var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const ansList = [];
    function findSubsets(ind, nums, ds, ansList) {
        ansList.push([...ds]);
        for (let i = ind; i < nums.length; i++) {
            if (i !== ind && nums[i] === nums[i - 1]) continue;
            ds.push(nums[i]);
            findSubsets(i + 1, nums, ds, ansList);
            ds.pop();
        }
    }
    findSubsets(0, nums, [], ansList);
    return ansList;
};
