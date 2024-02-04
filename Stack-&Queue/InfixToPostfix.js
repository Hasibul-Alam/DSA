function Prec(ch) {
    switch (ch) {
        case '+':
        case '-':
            return 1;

        case '*':
        case '/':
            return 2;

        case '^':
            return 3;
    }
    return -1;
}

function infixToPostfix(exp) {
    // initializing empty string for result
    let result = '';

    // initializing empty stack
    let stack = [];

    for (let i = 0; i < exp.length; ++i) {
        let c = exp.charAt(i);

        // If the scanned character is an operand, add it to output.
        if (/[a-zA-Z0-9]/.test(c)) result += c;
        // If the scanned character is an '(', push it to the stack.
        else if (c === '(') stack.push(c);
        // If the scanned character is an ')', pop and output from the stack
        // until a '(' is encountered.
        else if (c === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(')
                result += stack.pop();

            stack.pop();
        } // an operator is encountered
        else {
            while (stack.length > 0 && Prec(c) <= Prec(stack[stack.length - 1]))
                result += stack.pop();

            stack.push(c);
        }
    }

    // pop all the operators from the stack
    while (stack.length > 0) {
        if (stack[stack.length - 1] === '(') return 'Invalid Expression';
        result += stack.pop();
    }
    return result;
}

// Driver method
let exp = '(p+q)*(m-n)';
console.log('Infix expression: ' + exp);
console.log('Postfix expression: ' + infixToPostfix(exp));
