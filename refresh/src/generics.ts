//Generics with functions help make more generalized methods which more accurately represent the types used and returned.
const createPairs = <S, N>(v1: S, v2: N): [S, N] => {
  return [v1, v2];
};
console.log(createPairs<string, number>("hello", 23));

//We can also use type aliases using generics

type Multiply<T> = (v1: T, v2: T) => T;

const multiply: Multiply<number> = (v1, v2) => v1 * v2;

const multipliedNumber = multiply(5, 6);
console.log(multipliedNumber);
