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
enum Size {
  Small = 1,
  Medium,
  Large
}
let mySize: Size = Size.Medium;
console.log(mySize)
//Functions
//Typescript helps us to specify what types of returns we can give since it gives us an error if not
//Nounused locals
//noimplicity returns
//Nounsed params

function calculateTax(income: number, taxYear=2022): number {
    if (taxYear < 2020)
        return income*1.2;
    return income*1.3
}
calculateTax(2000,4000)
