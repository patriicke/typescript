"use strict";
const sum = (a, b, ...rest) => {
    return (a +
        b +
        rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
};
const total = sum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(total);
