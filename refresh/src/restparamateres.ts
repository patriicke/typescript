//I am going to deal with typescript rest parameter

const sum = (a: number, b: number, ...rest: number[]): number => {
  return (
    a +
    b +
    rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
};

const total = sum(1, 2, 3, 4, 5, 6, 7, 8);
console.log(total);
