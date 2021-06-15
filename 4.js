function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    }

    return n;
}

for (let i = 0; i < 13; i++) {
    const seq = fib(i);
    console.log(seq)
}