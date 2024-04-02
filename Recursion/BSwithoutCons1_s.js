// Problem: https://www.codingninjas.com/studio/problems/-binary-strings-with-no-consecutive-1s._893001?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

// Recursive Approach - Time : O(2^n) Space: O(n)

function generateBinaryStrings(N) {
    const result = [];

    function backtrack(str) {
        // If the length of the string equals N, add it to the result
        if (str.length === N) {
            result.push(str);
            return;
        }

        // If the last character of the string is '0', we can append either '0' or '1'
        if (str.length === 0 || str[str.length - 1] === '0') {
            backtrack(str + '0');
            backtrack(str + '1');
        }
        // If the last character of the string is '1', we can only append '0'
        else {
            backtrack(str + '0');
        }
    }

    // Start the backtracking process with an empty string
    backtrack('');

    return result;
}

// // Example usage:
// const N = 6;
// const binaryStrings = generateBinaryStrings(N);
// console.log(binaryStrings);

// Iterative approach - Time:O(2^n) Space:O(2^n)

function generateBinaryStrings(n) {
    const stack = ['0', '1'];
    const res = [];
    while (stack.length > 0) {
        let binaryString = stack.pop();
        if (binaryString.length === n) {
            res.push(binaryString);
            continue;
        }
        stack.push(binaryString + '0');
        if (binaryString[binaryString.length - 1] === '0') {
            stack.push(binaryString + '1');
        }
    }
    return res;
}

console.log(generateBinaryStrings(4));

// Iterative approach - Time: O(n) Space: O(1)

function noOfStrings(n) {
    let currZeros = 1;
    let currOnes = 1;
    let nos;
    for (let i = 0; i < n; i++) {
        nos = currOnes + currZeros;
        currOnes = currZeros;
        currZeros = nos;
    }
    return nos;
}
// console.log(noOfStrings(7));
