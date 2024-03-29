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

function kgsTograms(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 1000;
  } else {
    return parseInt(weight) / 1000;
  }
}
//Intersections in typescript
//We can refer this to mathermatics where we can have somethings that comprises more than one thing and authomatically we are in the sets
//We user & operator to indicate intersection

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Resizable & Draggable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
};
//Literal (exact, specific)

type Quantity = 12 | 15;

let quantiry: Quantity = 15;

type Metric = "cm" | "inch";

//Nullable types
//Rembember giving a null value is strict by default in typescript since it can lead to many bugs hence we dont just use it but we cn configure it by making it nullable

function greet(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase);
  } else {
    console.log("Hola");
  }
}

//Optional property access operator

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

const customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//customer?.[0]
//Optional Call

//Example let log:any = null
//log?.('a);
