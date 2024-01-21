// Problem: https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target <= nums[mid]) end = mid - 1;
            else start = mid + 1;
        } else {
            if (target >= nums[mid] && target <= nums[end]) start = mid + 1;
            else end = mid - 1;
        }
    }
    return -1;
}

// Time: O(logN) Space: O(1)

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
