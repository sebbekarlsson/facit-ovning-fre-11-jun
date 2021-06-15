function getDivisibleNumbers(x) {
    const listWithLengthOfX = Array.from(Array(x*2).keys());
    return listWithLengthOfX.filter(num => num % 2 === 0);
}

// [0, 2,  4,   6,  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

// [0,  2,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
const numbers = getDivisibleNumbers(16);

console.log(numbers);