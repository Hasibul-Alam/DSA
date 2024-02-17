// Brute Force Approach - Time: O(k*n) Space: O(n)

function maxScore(cardPoints, k) {
    const n = cardPoints.length;
    let maxScore = 0;

    // Try all possible combinations of left and right cards
    for (let leftCount = 0; leftCount <= k; leftCount++) {
        const rightCount = k - leftCount;
        const leftSum = sumArray(cardPoints.slice(0, leftCount));
        const rightSum = sumArray(cardPoints.slice(n - rightCount));
        maxScore = Math.max(maxScore, leftSum + rightSum);
    }

    return maxScore;
}

// Helper function to calculate the sum of an array
function sumArray(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
}

// Example usage:
const cardPoints = [1, 2, 3, 4, 5, 6, 1];
const k = 3;
console.log('Maximum points:', maxScore(cardPoints, k)); // Output: 12

// Optimal Approach - Time: O(n) Space: O(1)

function maxScore(cardPoints, k) {
    const n = cardPoints.length;
    const windowSize = n - k;

    // Calculate the sum of the first windowSize elements
    let windowSum = 0;
    for (let i = 0; i < windowSize; i++) {
        windowSum += cardPoints[i];
    }

    let minWindowSum = windowSum;

    // Slide the window along the array
    for (let i = windowSize; i < n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - windowSize];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }

    // Total sum of all elements
    const totalSum = cardPoints.reduce((sum, point) => sum + point, 0);

    // The maximum score is the total sum minus the minimum window sum
    return totalSum - minWindowSum;
}
