// Problem: https://www.codingninjas.com/studio/problems/subset-sum_630213?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Recursive Approach - Time: (2^n) Space: (2^n);

function subsetSumExists(nums, target) {
    // Define a recursive helper function
    function canMakeSum(index, currSum) {
        // Base case: If the current sum is equal to the target, return true
        if (currSum === target) {
            return true;
        }
        // Base case: If we've exhausted all elements or the current sum exceeds the target, return false
        if (index === nums.length || currSum > target) {
            return false;
        }
        // Try including the current element in the sum
        if (canMakeSum(index + 1, currSum + nums[index])) {
            return true;
        }
        // Try excluding the current element from the sum
        return canMakeSum(index + 1, currSum);
    }

    // Start the recursive function from index 0 with current sum 0
    return canMakeSum(0, 0);
}

// Example usage:
const A = [1, 2, 3];
const K = 5;
const exists = subsetSumExists(A, K);
console.log(exists); // Output: true
