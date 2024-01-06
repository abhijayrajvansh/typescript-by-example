function add(a: number, b: number) {
  return a + b;
}

const result = add(1, 2);

const anotherFunc = (a: number, b: number, c: number): number => {
  return a * b * c;
};

anotherFunc(1, 2, 3);

type newFuncType = (a: number, b: number, c?: number) => number;

const newFunc = (a, b, c) => {
  if (typeof c === "undefined") return a * b; // here if 'C' is not passed as a parameter then uses only 2 
  return a * b * c;
};

anotherFunc(1, 2, 3);

console.log(result);

// to compile and generate js code use tsc fileName.ts
// it will generate a fileName.js which node can run easily
