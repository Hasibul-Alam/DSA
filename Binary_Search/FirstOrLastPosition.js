// Problem: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Lower Bound
function firstPosition(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let sp = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (
            nums[mid] === target &&
            start < mid &&
            nums[mid] !== nums[mid - 1]
        ) {
            sp = mid;
            return sp;
        } else if (nums[mid] === target) {
            sp = mid;
            end = mid - 1;
        } else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return sp;
}

// Upper Bound
function lastPosition(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ep = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target && mid < end && nums[mid] !== nums[mid + 1]) {
            ep = mid;
            return ep;
        } else if (nums[mid] === target) {
            ep = mid;
            start = mid + 1;
        } else if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return ep;
}

function findFirstAndLastPosition(nums, target) {
    let sp = firstPosition(nums, target);
    if (sp === -1) return [-1, -1];
    else {
        let ep = lastPosition(nums, target);
        return [sp, ep];
    }
}

console.log(findFirstAndLastPosition([5, 7, 7, 8, 8, 10], 8));
console.log(findFirstAndLastPosition([5, 7, 7, 8, 8, 10], 6));
console.log(findFirstAndLastPosition([], 0));
