"use strict";
let sales = 123345565;
let course = "TypeScript";
let is_published = true;
let level;
level = 5;
level = "a";
function render(document) {
    console.log(document);
}
const arr = [1, 2, 3, 4];
const person = [1, "Patrick"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2020)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(2000, 4000);
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    }
};
function kgsTograms(weight) {
    if (typeof weight === "number") {
        return weight * 1000;
    }
    else {
        return parseInt(weight) / 1000;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantiry = 15;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase);
    }
    else {
        console.log("Hola");
    }
}
//# sourceMappingURL=index.js.map