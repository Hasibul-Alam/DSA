// Problem: https://leetcode.com/problems/max-consecutive-ones-iii/

// Optimal Solution

var longestOnes = function (nums, k) {
    let i = 0;
    let j = -1;
    let coziw = 0;
    let max = 0;
    while (i < nums.length) {
        if (nums[i] == 0) {
            coziw += 1;
            while (coziw > k) {
                j++;
                if (nums[j] == 0) coziw--;
            }
        }
        i++;
        max = Math.max(max, i - j - 1);
    }
    return max;
};

// Time: O(n) Space: O(1)
