//Here Function types can be specified separately from functions with type aliases.

type Negate = (value: number) => number;

const negateFunction: Negate = (number) => number * -1;

const negativeNumber = negateFunction(5);
console.log(negativeNumber);

//Task find the sum of two numbers using type alias

type Sum = (a: number, b: number) => number;
const sumNumbers: Sum = (a, b) => a + b;

let totalSum = sumNumbers(4, 6);

console.log(totalSum);
