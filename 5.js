const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // pappret vi ritar pa


function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    }

    return n;
}

function getFibSequence(n) {
    const arr = [];
    for (let i = 0; i < n; i++)
        arr.push([i, fib(i)]);

    return arr;
}


const DATA = getFibSequence(32);

console.log(DATA);

const scale = 0.0003;

function setPixel(ctx, x, y, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
    ctx.closePath();
}


function drawText(ctx, x, y, text, color) {
    ctx.fillStyle = color;
    ctx.font = "8px Arial";
    ctx.fillText(text, x, y);
    ctx.fillStyle = "red";
}


for (let i = 0; i < canvas.width / 16; i++) {
    drawText(ctx, -16 + (i * 16), canvas.height - 16, i, "white");
}

const VALUES = DATA.map(pair => pair[1]).reverse();
const max = VALUES.sort((a, b) => a[1] < b[1]).reverse()[0];


for (let y = 0; y < canvas.height / 16; y++) {

        const step = y * 16;
        const v = VALUES[y];

        drawText(ctx, 0, canvas.height - step, v, "white");
}

DATA.forEach(function(pair){
    const x = pair[0] * 16;
    const y = pair[1] * scale;



    for (let i = 0; i < y; i++) {
        setPixel(ctx, x, canvas.height - i, "red");
    }
});