//Here we are going to say about the nullability
//We will use | many times to allow functions to return null and undefined values in our code

const greet = (name: string | null | undefined): void => {
  console.log(name?.toUpperCase());
};
