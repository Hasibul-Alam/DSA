// Problem: https://www.codingninjas.com/studio/problems/check-prime_624934?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

const isPrime = (n) => {
    if (n == 1) return false;
    if (n == 2) return true;
    for (let i = 2; i <= Math.floor(Math.sqrt(n) + 1); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// Time Complexity: O(√n)

// Space Complexity: O(1)

console.log(isPrime(12));
console.log(isPrime(97));
