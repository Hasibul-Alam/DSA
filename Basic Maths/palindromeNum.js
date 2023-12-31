// Problem: https://leetcode.com/problems/palindrome-number/description/

// Approach 1:
const isPalindrome = (x) => {
    if (x >= 0) {
        let num = x;
        let rev = 0;
        while (num) {
            let d = num % 10;
            num = Math.floor(num / 10);
            rev = rev * 10 + d;
        }
        if (rev == x) return true;
        else return false;
    } else return false;
};

// Time: O(n) n= the # of digits, Space:O(1)

// Approach 2:

const isPalindrome2 = (x) => {
    if (x >= 0) {
        let rev = x.toString().split('').reverse().join('');
        rev = parseInt(rev);
        if (rev == x) return true;
        else return false;
    } else return false;
};

// Time: O(n), where n is the # of digits. Space: O(n)

console.log(isPalindrome(121));
console.log(isPalindrome2(121));
console.log(isPalindrome(-121));
console.log(isPalindrome2(-121));
