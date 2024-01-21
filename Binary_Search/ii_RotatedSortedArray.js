// Problem: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/

function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) return true;
        if (nums[mid] === nums[start] && nums[mid] === nums[end]) {
            start++;
            end--;
            continue;
        }
        if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target <= nums[mid]) end = mid - 1;
            else start = mid + 1;
        } else {
            if (target >= nums[mid] && target <= nums[end]) start = mid + 1;
            else end = mid - 1;
        }
    }
    return false;
}

// Time: O(logN) Space: O(1)

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
