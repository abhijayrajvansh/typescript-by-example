type arrayNumbersType = (...N: number[]) => number[];
// declaration of type = para: type      => return type;

const arrayNumbers: arrayNumbersType = (...N) => {
  return N;
};

console.log(69, 2, 4545, 352, 234, 45);
