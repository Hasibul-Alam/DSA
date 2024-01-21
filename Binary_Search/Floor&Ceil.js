// Problem: https://www.codingninjas.com/studio/problems/ceiling-in-a-sorted-array_1825401?leftPanelTab=0

function findFloor(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let fl = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target && start < mid && nums[mid] !== nums[mid - 1])
            return nums[mid];
        if (nums[mid] === target) {
            fl = nums[mid];
            end = mid - 1;
        } else if (nums[mid] > target) end = mid - 1;
        else {
            fl = nums[mid];
            start = mid + 1;
        }
    }
    return fl;
}

function findCeil(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let cl = -1;
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] === target && mid < end && nums[mid] !== nums[mid + 1])
            return nums[mid];
        if (nums[mid] === target) {
            cl = nums[mid];
            start = mid + 1;
        } else if (nums[mid] < target) start = mid + 1;
        else {
            cl = nums[mid];
            end = mid - 1;
        }
    }
    return cl;
}

function main(nums, target) {
    let fl = findFloor(nums, target);
    let cl = findCeil(nums, target);
    return [fl, cl];
}

// Time: O(log N) Space: O(1)

console.log(main([3, 4, 4, 7, 8, 10], 8));
console.log(main([3, 4, 4, 7, 8, 10], 2));
console.log(main([], 2));
