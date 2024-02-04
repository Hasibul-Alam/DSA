function isAlpha(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

function isDigit(c) {
    return c >= '0' && c <= '9';
}

function isOperator(c) {
    return !isAlpha(c) && !isDigit(c);
}

function getPriority(C) {
    if (C === '-' || C === '+') {
        return 1;
    } else if (C === '*' || C === '/') {
        return 2;
    } else if (C === '^') {
        return 3;
    }

    return 0;
}

function reverse(str, start, end) {
    let temp;
    while (start < end) {
        temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
    }
    return str.join('');
}

function infixToPostfix(infix1) {
    let infix = '(' + infix1.join('') + ')';
    let l = infix.length;
    let charStack = [];
    let output = '';

    for (let i = 0; i < l; i++) {
        if (isAlpha(infix.charAt(i)) || isDigit(infix.charAt(i))) {
            output += infix.charAt(i);
        } else if (infix.charAt(i) === '(') {
            charStack.push('(');
        } else if (infix.charAt(i) === ')') {
            while (charStack[charStack.length - 1] !== '(') {
                output += charStack[charStack.length - 1];
                charStack.pop();
            }
            charStack.pop();
        } else {
            if (isOperator(charStack[charStack.length - 1])) {
                while (
                    getPriority(infix.charAt(i)) <
                        getPriority(charStack[charStack.length - 1]) ||
                    (getPriority(infix.charAt(i)) <=
                        getPriority(charStack[charStack.length - 1]) &&
                        infix.charAt(i) === '^')
                ) {
                    output += charStack[charStack.length - 1];
                    charStack.pop();
                }
                charStack.push(infix.charAt(i));
            }
        }
    }

    while (charStack.length > 0) {
        output += charStack.pop();
    }
    return output;
}

function infixToPrefix(infix) {
    let l = infix.length;
    let infix1 = reverse(infix.slice(), 0, l - 1);

    for (let i = 0; i < l; i++) {
        if (infix1[i] === '(') {
            infix1[i] = ')';
            i++;
        } else if (infix1[i] === ')') {
            infix1[i] = '(';
            i++;
        }
    }

    let prefix = infixToPostfix(infix1);

    return reverse(prefix.split(''), 0, l - 1);
}

// Driver method
let infixExpression = '(p+q)*(c-d)';
console.log('Infix expression: ' + infixExpression);
console.log('Prefix expression: ' + infixToPrefix(infixExpression.split('')));
