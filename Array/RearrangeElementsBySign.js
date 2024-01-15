// Problem: https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

function rearrangeElements(nums) {
    let pos = [];
    let neg = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) neg.push(nums[i]);
        else pos.push(nums[i]);
    }
    for (let j = 0; j < nums.length / 2; j++) {
        nums[2 * j] = pos[j];
        nums[2 * j + 1] = neg[j];
    }
    return nums;
}

// Time: O(n) Space: O(n)

console.log(rearrangeElements([3, 1, -2, -5, 2, -4]));
