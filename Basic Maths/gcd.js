// Problem: https://takeuforward.org/data-structure/find-gcd-of-two-numbers/

// Approach 1:
function find_gcd(a, b) {
    let ans;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) ans = i;
    }
    return ans;
}
// Time Complexity: O(N). Space Complexity: O(1).

// Approach 2: Euclidean's Algorithm

function findGCD(a, b) {
    if (b == 0) return a;
    return findGCD(b, a % b);
}

// Time: O(logɸmin(a,b)), where ɸ is 1.61. Space: O(1).

console.log(find_gcd(3, 8));
console.log(find_gcd(4, 8));
console.log(findGCD(3, 8));
console.log(findGCD(8, 4));
