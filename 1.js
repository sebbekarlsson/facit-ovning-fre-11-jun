function getUpperCaseLetters(str) {
    return Array.from(str)
        .filter(char => char.toUpperCase() === char && char != " ");
}

function getUpperCaseLetters2(str) {
    const arr = [];

    for (let i = 0; i < str.length; i++) {
        const chr = str[i];
        if (chr === chr.toUpperCase() && chr != " ") {
            arr.push(chr)
        }
    }

    return arr;
}

const result = getUpperCaseLetters2("Sebastian Karlsson");
console.log(result);