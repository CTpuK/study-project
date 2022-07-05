(function () {
    'use strict';
}());

let num = 30;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

/* console.log(calc(5, 5));
console.log(calc(3, 6));
console.log(calc(10, 6));

function calc(a, b) {
    return (a + b);
} */

function ret() {
    let num = 50;

    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello!");
};
logger();

const calc = (a, b) => {
    console.log("1");
    return a + b;
};

console.log(calc(5, 6));

