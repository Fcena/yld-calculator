export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    return x / y;
}

export function clear(x, y) {
    return 0;
}

export function negate(x) {
    return x * -1;
}

export function square(x) {
    return Math.pow(x,0.5);
}

export function mem(x) {
    return Math.pow(x,0.5);
}

export function memRecall(x) {
    return Math.pow(x,0.5);
}

export function memSub(x) {
    return Math.pow(x,0.5);
}

export function memAdd(x) {
    return Math.pow(x,0.5);
}


export function percent(x) {
    return Number((x * 0.01).toFixed(12).replace(/0+$/, ''));
}
