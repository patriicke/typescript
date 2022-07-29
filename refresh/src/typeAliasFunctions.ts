//Here Function types can be specified separately from functions with type aliases.

type Negate = (value: number) => number;

const negateFunction: Negate = (number) => number * -1;

const negativeNumber = negateFunction(5);
console.log(negativeNumber);
