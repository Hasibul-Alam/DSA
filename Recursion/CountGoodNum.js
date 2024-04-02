// Problem: https://leetcode.com/problems/count-good-numbers/description/

// Iterative Approach - Time:O(logn) Space:O(logn)

function power(base, exp, mod) {
    let ans = BigInt(1);
    while (exp) {
        if (exp % 2 == 1) {
            ans = (ans * base) % mod;
            exp -= 1;
        } else {
            base = (base * base) % mod;
            exp = Math.floor(exp / 2); // Use integer division
        }
    }
    return ans;
}

var countGoodNumbers = function (n) {
    const mod = BigInt(1000000007);
    let evenCount = Math.floor((n + 1) / 2);
    let primeCount = Math.floor(n / 2);
    return (
        (power(BigInt(5), evenCount, mod) * power(BigInt(4), primeCount, mod)) %
        mod
    );
};

// Recursive approach - we can find pow using recursion. Look at Pow.js.
