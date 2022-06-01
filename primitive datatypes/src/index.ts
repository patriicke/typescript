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
