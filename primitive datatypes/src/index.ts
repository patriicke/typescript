//numbers
let sales = 123_345_565;
//string
let course = "TypeScript";
//booleans
let is_published = true;
//any
let level;
level = 5;
level = "a";
//passing arguments as any
function render(document: any) {
  console.log(document);
}
//array
const arr: number[] = [1, 2, 3, 4];
//tuple
const person: [number, string] = [1, "Patrick"];
//enums
const enum Size {
  Small = 1,
  Medium,
  Large
}
let mySize: Size = Size.Medium;
console.log(mySize);
//Functions
//Typescript helps us to specify what types of returns we can give since it gives us an error if not
//Nounused locals
//noimplicity returns
//Nounsed params

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2020) return income * 1.2;
  return income * 1.3;
}
calculateTax(2000, 4000);
//Objects

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  }
};
//These where we are going to include the typescript aliases to give our selves access to reuse it in many area
//Type script aliases makes our code cleaner and understandable

//Unions
//Unions are represented by a vertical slash in typescript
//example

function kgsTograms(weight:number|string): number {
  if (typeof weight === "number") {
    return weight * 1000;
  } else {
    return parseInt(weight) / 1000;
  }
}
