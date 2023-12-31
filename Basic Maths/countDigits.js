// Problem: https://takeuforward.org/data-structure/count-digits-in-a-number/

// Approach 1:
const numOfDigits = (n) => {
    let count = 0;
    let x = n;
    while (x) {
        x = Math.floor(x / 10);
        count++;
    }
    return count;
};
// Time: O(n), where n is the # of digits. Space: O(1)

// Approach 2:
const numOfDigits2 = (n) => {
    let s = n.toString();
    return s.length;
};
// Time: O(1); Space: O(1).

// Approach 3: Logarithm base 10
const numOfDigits3 = (n) => {
    let x = Math.floor(Math.log10(n) + 1);
    return x;
};
// Time: O(1); Space: O(1).

console.log(numOfDigits(133));
console.log(numOfDigits(1000));
console.log(numOfDigits(489947957));
console.log(numOfDigits2(489947957));
console.log(numOfDigits3(1000));
