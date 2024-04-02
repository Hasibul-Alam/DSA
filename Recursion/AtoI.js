// Problem: https://leetcode.com/problems/string-to-integer-atoi/description/

// Recursive approach (pure)

var myAtoi = function (input) {
    let sign = 1;
    let res = 0;
    let encounteredDigits = false;
    let index = 0;
    let signcount = 0;

    return atoi(input, index, sign, signcount, res, encounteredDigits);

    function atoi(input, index, sign, signcount, res, flag) {
        if (
            index === input.length ||
            (flag && isNaN(input[index])) ||
            (flag && input[index] === ' ') ||
            (signcount && input[index] === ' ')
        )
            return res * sign;
        if (input[index] === '+' || input[index] === '-') {
            signcount += 1;
            sign = input[index] == '+' ? 1 : -1;
            if (signcount > 1) return 0;
            return atoi(input, index + 1, sign, signcount, res, flag);
        }
        if (!flag && isNaN(input[index])) return 0;
        if (input[index] === ' ')
            return atoi(input, index + 1, sign, signcount, res, flag);
        if (!isNaN(input[index])) {
            let digit = input[index] - '0';
            res = res * 10 + digit;
            let temp = sign * res;
            if (temp > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
            if (temp < Math.pow(-2, 31)) return Math.pow(-2, 31);
            return atoi(input, index + 1, sign, signcount, res, (flag = true));
        }
    }
};

// console.log(myAtoi('  -42'));
// console.log(myAtoi('21474836460'));
console.log(myAtoi('   +0 123'));

// Recursive and Iterative - Time: O(n) Space: O(1);

var myAtoi = function (s) {
    let i = 0;

    // Helper function to recursively parse the string
    const parse = (s, i, sign, result) => {
        // Base case: if index is out of bounds or current character is not a digit
        if (i >= s.length || s[i] < '0' || s[i] > '9') {
            return result * sign;
        }

        // Update result and continue recursively
        result = result * 10 + (s[i] - '0');
        let temp = sign * result;

        // Clamp the result to the 32-bit signed integer range
        if (temp < -Math.pow(2, 31)) {
            return -Math.pow(2, 31);
        } else if (temp > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        }

        return parse(s, i + 1, sign, result);
    };

    // Ignore leading whitespace
    while (s[i] === ' ') {
        i++;
    }

    // Check sign
    let sign = 1;
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Start parsing the string recursively
    return parse(s, i, sign, 0);
};

// Itrative approach - Time: O(n) Space: O(1);

var myAtoi = function (input) {
    let sign = 1;
    let result = 0;
    let index = 0;
    let n = input.length;

    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = Math.pow(-2, 31);

    // Discard all spaces from the beginning of the input string.
    while (index < n && input[index] == ' ') {
        index++;
    }

    // sign = +1, if it's positive number, otherwise sign = -1.
    if (index < n && input[index] == '+') {
        sign = 1;
        index++;
    } else if (index < n && input[index] == '-') {
        sign = -1;
        index++;
    }

    // Traverse next digits of input and stop if it is not a digit.
    // End of string is also non-digit character.
    while (index < n && input[index] >= '0' && input[index] <= '9') {
        let digit = input[index] - '0';
        // Append current digit to the result.
        result = 10 * result + digit;
        let temp = sign * result;

        // Check overflow and underflow conditions.
        if (temp > INT_MAX) return INT_MAX;
        if (temp < INT_MIN) return INT_MIN;

        index++;
    }

    // We have formed a valid number without any overflow/underflow.
    // Return it after multiplying it with its sign.
    return sign * result;
};
