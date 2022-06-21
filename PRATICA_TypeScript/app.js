"use strict";
console.log('okkk');
let Button = document.getElementById('btn');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function soma(n1, n2) {
    return n1 + n2;
}
Button === null || Button === void 0 ? void 0 : Button.addEventListener('click', () => {
    console.log(soma(Number(input1.value), Number(input2.value)));
});
