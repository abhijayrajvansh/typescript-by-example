const obj: {
  height: number;
  weight: number;
} = {
  height: 185,
  weight: 75,
};
// doing this will increase systactically

type anotherObjType = {
  length: number;
  breadth: number;
  height?: number; // adding '?' in the type interface will make it optional
};

const anotherObj: anotherObjType = {
  length: 21,
  breadth: 51,
  height: 69, // adding type object throws an error to counter bug
};

// interface can be treated as class
interface anotherObj {
  // same as type without '='
  length: number;
  breadth: number;
  height?: number;
}

type FuncType = (a: number, b: number) => void;

interface NewObj extends anotherObj {
  // anotherObj + NewObj Type included
  existence: boolean;
  //   fun?: (a: number, b: number) => void; // now this is okay but looks lengthy so we use type
  fun: FuncType; // now this is okay but looks lengthy so we use type
}

const newShape: NewObj = {
  length: 123,
  existence: false,
  breadth: 765,
  fun: (a, b) => {
    console.log(a * b);
  },
};

newShape.fun(500, 15000)