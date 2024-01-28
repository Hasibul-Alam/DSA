// Problem: https://leetcode.com/problems/count-good-numbers/description/

function power(a, b, mod) {
    let ans = BigInt(1);
    while (b) {
        if (b % 2 == 1) {
            ans = (ans * a) % mod;
            b -= 1;
        } else {
            a = (a * a) % mod;
            b = Math.floor(b / 2); // Use integer division
        }
    }
    return ans;
}

var countGoodNumbers = function (n) {
    const mod = BigInt(1000000007);
    let odd, even;

    if (n % 2 == 0) {
        odd = Math.floor(n / 2);
        even = Math.floor(n / 2);
    } else {
        let k = Math.floor((n - 1) / 2);
        odd = k + 1;
        even = k;
    }

    return (power(BigInt(5), odd, mod) * power(BigInt(4), even, mod)) % mod;
};

// Time: O(logn) Space: O(1)

console.log(countGoodNumbers(1));
console.log(countGoodNumbers(4));
console.log(countGoodNumbers(50));
