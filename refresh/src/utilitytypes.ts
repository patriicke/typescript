//TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// 1. Partial
//This allows all properties of an object to be optional

type Per = {
  fname: string;
  lname: string;
  dob: Date;
  age: number;
};

const per: Partial<Per> = {}; // Boom I have made all properties optional

// 2. Required

//Here even if we made the Per properties optional it'll still be required
const anotherPer: Required<Per> = {
  fname: "Patrick",
  lname: "NDAYAMBAJE",
  dob: new Date(),
  age: 25
};

// 3.Record

//Record is a shortcut to defining an object type with a specific key type and value type

const nameAgeMap: Record<string, number> = {
  Patrick: 20,
  Kloos: 30
};

console.log(nameAgeMap.Patrick);
