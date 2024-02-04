// Problem: https://leetcode.com/problems/next-greater-element-i/description/

var nextGreaterElement = function (nums1, nums2) {
    let map = new Map();
    let stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            map.set(nums2[i], -1);
            stack.push(nums2[i]);
        } else if (stack.length > 0 && stack.at(-1) > nums2[i]) {
            map.set(nums2[i], stack.at(-1));
            stack.push(nums2[i]);
        } else {
            while (stack.length > 0 && stack.at(-1) < nums2[i]) {
                stack.pop();
            }
            map.set(nums2[i], stack.length ? stack.at(-1) : -1);
            stack.push(nums2[i]);
        }
    }
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        res.push(map.get(nums1[i]));
    }
    return res;
};

// Time: O(n) Space: O(n)

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
