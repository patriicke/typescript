type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const employee: Employee = {
  id: 1,
  name: "Patrick",
  retire: (date: Date) => {
    console.log(date);
  }
};
//You can add access modifier to the typescript program like readonly
// I am going to use type annotation using type keyword, this is and advanced concept since it will follow programming principle DRY: Don't Reapeat Yourself
