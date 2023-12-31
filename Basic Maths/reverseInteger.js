// Problem: https://leetcode.com/problems/reverse-integer/description/

// Approach 1:

const reverseInt = (x) => {
    let n = Math.abs(x);
    // let n = n;
    let p = Math.pow(2, 31);
    let num = 0;
    while (n) {
        let d = n % 10;
        n = Math.floor(n / 10);
        num = num * 10 + d;
    }
    if (x < 0) num *= -1;
    if (num > -1 * p && num < p - 1) return num;
    else return 0;
};
// Time: O(n), where n is the # of digits. Space: O(1)
// Approach 2:

function reverse2(x) {
    let p = Math.pow(2, 31);
    let rev = x.toString().split('').reverse().join('');
    let num = parseInt(rev);
    if (x < 0) num *= -1;
    if (num > -1 * p && num < p - 1) return num;
    else return 0;
}
// Time: O(n), where n is the # of digits. Space: O(n), Here n is negligible so O(1);

console.log(reverseInt(123));
console.log(reverseInt(-9488737));
console.log(reverseInt(968857748447));
console.log(reverse2(123));
console.log(reverse2(-9488737));
console.log(reverse2(968857748447));
