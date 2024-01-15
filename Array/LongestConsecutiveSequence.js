// Problem: https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutiveSequence(nums) {
    let set = new Set(nums);
    let lg = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let count = 1;
            let x = nums[i];
            while (set.has(x + 1)) {
                count += 1;
                x += 1;
            }
            lg = Math.max(count, lg);
        }
    }
    return lg;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
