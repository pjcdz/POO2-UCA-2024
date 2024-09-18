function factorial(n) {
    if (n < 0) {
        throw new Error('Factorial of a negative number is undefined');
    } 

    if (!Number.isInteger(n)) {
        throw new Error('Factorial of a non-integer number is undefined');
    }

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

module.exports = factorial;