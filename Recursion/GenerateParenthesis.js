// Problem: https://leetcode.com/problems/generate-parentheses/description/

// Recursive Approach 01 - Time: O((2^n)*n) Space: O(2^2n);

var generateParenthesis = function (n) {
    const validParenthesis = [];

    function isValidParentheses(s) {
        const stack = [];
        for (let char of s) {
            if (char === '(') {
                stack.push(')');
            } else {
                const top = stack.pop();
                if (top !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }

    function backtrack(str) {
        if (str.length === n * 2) {
            if (str[str.length - 1] === ')') {
                let isValid = isValidParentheses(str);
                if (isValid) validParenthesis.push(str);
            }
            return;
        }
        backtrack(str + '(');
        if (str.length !== 0) backtrack(str + ')');
    }
    backtrack('');
    return validParenthesis;
};

// Recursive Approach 02 - Time: O(2^2n) Space: O(2^2n);

var generateParenthesis1 = function (n) {
    const validParenthesis = [];
    function backtrack(str, open, close) {
        if (str.length === n * 2) {
            validParenthesis.push(str);
            return;
        }
        if (open < n) backtrack(str + '(', open + 1, close);
        if (close < open) backtrack(str + ')', open, close + 1);
    }
    backtrack('', 0, 0);
    return validParenthesis;
};

console.log(generateParenthesis1(3));

// Iterative approach - Time: O((2^2n)*2n) Space: O(2^2n)

var generateParenthesis = function (n) {
    const stack = [''];
    const validParenthesis = [];
    while (stack.length > 0) {
        const str = stack.pop();
        if (str.length === n * 2) {
            if (str[str.length - 1] === ')') {
                if (isValidParentheses(str)) validParenthesis.push(str);
            }
            continue;
        }
        stack.push(str + '(');
        if (str.length !== 0) stack.push(str + ')');
    }
    function isValidParentheses(s) {
        const stack = [];
        for (let char of s) {
            if (char === '(') {
                stack.push(')');
            } else {
                const top = stack.pop();
                if (top !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    return validParenthesis;
};
// console.log(generateParenthesis(3));
