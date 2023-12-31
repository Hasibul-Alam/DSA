// Problem: https://www.codingninjas.com/studio/problems/print-all-divisors-of-a-number_1164188?utm_source=striver&utm_medium=website&utm_campaign=codestudio_a_zcourse

// Approach 1:
const divisors = (n) => {
    let d = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) d.push(i);
    }
    d.push(n);
    return d;
};

// Time Complexity: O(n), because the loop has to run from 1 to n always.
// Space Complexity: O(1), we are not using any extra space.

// Approach 2: (Does not maintain order)
const divisors2 = (n) => {
    let d = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            d.push(i);
            if (i !== n / i) d.push(n / i);
        }
    }
    return d;
};

// Time Complexity: O(sqrt(n)), because every time the loop runs only sqrt(n) times.
// Space Complexity: O(1), we are not using any extra space.

console.log(divisors(10));
console.log(divisors2(10));
