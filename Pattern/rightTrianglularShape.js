function shape(n) {
    let str_shape = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str_shape += i;
        }
        str_shape += '\n';
    }
    return str_shape;
}

function flip_shape(n) {
    let str_shape = '';
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            str_shape += i;
        }
        str_shape += '\n';
    }
    return str_shape;
}

function binary_digit_shape(n) {
    let str_shape = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 1) str_shape += '0 ';
                else str_shape += '1 ';
            } else {
                if (j % 2 === 1) str_shape += '1 ';
                else str_shape += '0 ';
            }
        }
        str_shape += '\n';
    }
    return str_shape;
}
console.log(shape(5));
console.log(flip_shape(5));
console.log(binary_digit_shape(5));
