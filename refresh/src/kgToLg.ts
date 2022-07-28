//Here we are going to learn how to use the Union types
//We are considering this example of converting from kg to pounds
//Remember that we might get kg with kg or without it. How can you resolve this in typescript
//You can use vertical Bar which allows you to use two or more type annotation
//Finally you use Narrowing to differenciate the types
//Here we go

const kgToLb = (weight: number | string): number => {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
};
