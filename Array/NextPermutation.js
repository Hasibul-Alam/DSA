// Problem: https://leetcode.com/problems/next-permutation/

function nextPermutation(nums) {
    let breakPoint = -1;
    let n = nums.length;

    // Step 1: Find the break point:
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            breakPoint = i;
            break;
        }
    }
    // If break point does not exist:
    if (breakPoint === -1) {
        // reverse the whole array
        for (let i = 0; i < Math.floor(n / 2); i++) {
            [nums[i], nums[n - 1 - i]] = [nums[n - 1 - i], nums[i]];
        }
        // nums.reverse();
        return nums;
    }

    // Step 2: Find the next greater element (the elements are in descending
    // order in the right side of the breakpoint) and swap it with
    // nums[breakPoint]:

    for (let i = n - 1; i > breakPoint; i--) {
        if (nums[i] > nums[breakPoint]) {
            [nums[breakPoint], nums[i]] = [nums[i], nums[breakPoint]];
            break;
        }
    }

    // Step 3: Rearrange the elements in ascending order. As the elements are in descending order, just reverse them:

    nums.splice(
        breakPoint + 1,
        n - breakPoint - 1,
        ...nums.slice(breakPoint + 1).reverse(),
    );

    return nums;
}

console.log(nextPermutation([1, 3, 2]));

// Time: O(n) Space:O(1)
