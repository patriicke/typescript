"use strict";
const kgToLb = (weight) => {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};
