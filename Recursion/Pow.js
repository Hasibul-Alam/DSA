// Problem: https://leetcode.com/problems/powx-n/description/

// Iterative approach - Time: O(logn) Space: O(1)

var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let pow = 1;
    while (n > 0) {
        if (n & 1) {
            pow *= x;
            n = n - 1;
        } else {
            x *= x;
            n = Math.floor(n / 2);
        }
    }
    return pow;
};

// Recursive approach - Time: O(logn) Space: O(logn)

var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let pow = 1;
    function helper(x, n, pow) {
        if (n == 0) return pow;
        if (n % 2 == 1) {
            pow *= x;
            n -= 1;
        } else {
            x *= x;
            n = Math.floor(n / 2);
        }
        return helper(x, n, pow);
    }
    return helper(x, n, pow);
};
