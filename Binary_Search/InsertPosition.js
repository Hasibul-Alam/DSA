// Problem: https://leetcode.com/problems/search-insert-position/description/

// Same as LowerBound
function findInsertPosition(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.length;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) {
            ans = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return ans;
}

// Time: O(logN) Space: O(1)

console.log(findInsertPosition([-1, 0, 3, 5, 9, 12], 7)); // 4
console.log(findInsertPosition([1, 3, 5, 6], 7)); // 4
console.log(findInsertPosition([2, 3, 5, 6], 1)); // 0
