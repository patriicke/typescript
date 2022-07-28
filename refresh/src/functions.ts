const calculateTax = (income: number, taxYear: number): number => {
  //   let x; Her I want to say that no unused locals and no unused paramaters
  //Also if you want to you provide parameter and you except to have it or not it's better to give it a default
  //Example taxYear=2020
  if (taxYear < 2022) return income * 2;
  return income * 4;
};
