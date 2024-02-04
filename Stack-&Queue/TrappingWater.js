// Problem: https://leetcode.com/problems/trapping-rain-water/description/

// Brute Force approach

function trap(height) {
    let res = 0;
    for (let i = 0; i < height.length; i++) {
        let leftMax = 0;
        let rightMax = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (height[j] > leftMax) leftMax = height[j];
        }
        for (let k = i + 1; k < height.length; k++) {
            if (height[k] > rightMax) rightMax = height[k];
        }
        let min = Math.min(leftMax, rightMax);
        if (min > height[i]) res += min - height[i];
    }
    return res;
}

// Time: O(n^2) Space: O(1);
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// Better Approach

function trap_water(height) {
    let prefixMax = [height[0]];
    let suffixMax = [];
    suffixMax[height.length - 1] = height[height.length - 1];
    let res = 0;
    for (let i = 1; i < height.length; i++) {
        if (prefixMax[i - 1] < height[i]) prefixMax[i] = height[i];
        else prefixMax[i] = prefixMax[i - 1];
    }
    for (let j = height.length - 2; j >= 0; j--) {
        if (suffixMax[j + 1] < height[j]) suffixMax[j] = height[j];
        else suffixMax[j] = suffixMax[j + 1];
    }
    for (let k = 0; k < height.length; k++) {
        let min = Math.min(prefixMax[k], suffixMax[k]);
        if (min > height[k]) res += min - height[k];
    }
    return res;
}

// Time: O(n) Space:O(n)
// console.log(trap_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// Optimal Approach

function amountOfTrappedWater(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else res += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else res += rightMax - height[right];
            right--;
        }
    }
    return res;
}

// Time: O(n) Space: O(1)

console.log(amountOfTrappedWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
