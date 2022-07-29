//A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let x: unknown = "hello";
console.log((x as string).length); // Here it can't work before casting x to a string

//Using <> works the same as casting with as
let y: unknown = "How are you doing";
console.log((<string>x).length); // Not that this type of typecasting will not work with react files so better use the above

//We also have force casting

let z = "hello";
// console.log(((z as unknown) as number).lenght)  as we can see we have force casted this type and resulted into a number only
