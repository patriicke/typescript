const employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Patrick",
  retire: (date: Date) => {
    console.log(date);
  }
};
//You can add access modifier to the typescript program like readonly
