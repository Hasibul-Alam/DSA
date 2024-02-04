// Problem: https://leetcode.com/problems/remove-k-digits/

// Brute force approach: Time:O(n choose k) Space: O(n choose k)

function removeKdigitsBruteForce(num, k) {
    if (k === 0) {
        return num;
    }

    let minNum = num;

    for (let i = 0; i < num.length; i++) {
        const modifiedNum = num.substring(0, i) + num.substring(i + 1);
        const currentMin = removeKdigitsBruteForce(modifiedNum, k - 1);

        if (currentMin < minNum) {
            minNum = currentMin;
        }
    }

    return minNum;
}

// Example usage:
const num = '1432219';
const k = 3;
const result = removeKdigitsBruteForce(num, k);
console.log(result);

// Optimal Approach: Time: O(n) Space: O(n);

function removeKdigits(num, k) {
    let n = num.length;
    let mystack = [];

    for (let i = 0; i < n; i++) {
        while (
            mystack.length > 0 &&
            k > 0 &&
            mystack[mystack.length - 1] > num[i]
        ) {
            mystack.pop();
            k--;
        }

        if (mystack.length > 0 || num[i] !== '0') {
            mystack.push(num[i]);
        }
    }

    while (mystack.length > 0 && k > 0) {
        mystack.pop();
        k--;
    }

    if (mystack.length === 0) {
        return '0';
    }

    let result = '';
    while (mystack.length > 0) {
        result = mystack[mystack.length - 1] + result;
        mystack.pop();
    }

    return result;
}

// console.log(removeKdigits('1432219', 3));
// console.log(removeKdigits('10200', 1));
// console.log(removeKdigits('10', 2));
// console.log(removeKdigits('234057', 3));
