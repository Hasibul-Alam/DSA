// Problem: https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/

const isArmstrong = (a) => {
    let count = 0;
    let x = a;
    while (x) {
        x = Math.floor(x / 10);
        count++;
    }
    let n = a;
    let sum = 0;
    while (n) {
        let d = n % 10;
        n = Math.floor(n / 10);
        sum += Math.pow(d, count);
    }
    return a == sum;
};

// Time Complexity: O(n) where n is the number of digits since we need to traverse every digit and add digits raised to power no. of digits to sum.

// Space Complexity: O(1) since no extra space is required

console.log(isArmstrong(370));
console.log(isArmstrong(153));
console.log(isArmstrong(120));
