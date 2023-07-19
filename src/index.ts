//no need to define types
let a = 5;
let myStr = "Saad";

let myVar; //type is any

myVar = 5;

myVar = "saad"; //damge the motive of TS

const myFun = (data: any) => {
  console.log(data);
};

//change tsconfig to handle this

// now array
let evens: number[] = [2, 4, 6];
console.log(evens.length);

//if not specify it will be any

//tupples
let myTupple: [number, string, boolean] = [1, "saad", true];
myTupple.push(2); //simple work as array, should be two only like kry value

//without const complex structure in js, so, add const
const enum roles {
  Employee,
  Manager,
  HR,
}
console.log(roles.Employee);

//function

function myFunction(n: number, calc?: boolean) {
  let x: number = 0;
  if (n < 0) {
    x = n * 10;
  }
  if (calc || false) {
    return 400;
  }
  return x;
}

console.log(myFunction(4, true));
console.log(myFunction(-9));

//objects

let dateT: Date = new Date();

let myObj: {
  readonly id: number;
  name: string;
  expires: (date: Date) => boolean;
} = {
  id: 1,
  name: "saad",
  expires: () => {
    return true;
  },
};

//modify it with type
type Product = {
  readonly sid: number;
  expires: () => boolean;
};

let prodObj: Product = {
  sid: 1,
  expires: () => {
    let date: Date = new Date();
    if (date.getFullYear() >= 2023) {
      return true;
    } else {
      return false;
    }
  },
};

let value: boolean = prodObj.expires();
console.log(value);

//union
function myFunctionP(value: number | string): number {
  if (typeof value == "string") {
    return parseInt(value) + 11;
  } else {
    return value + 11;
  }
}

//intersection
type Pounds = {
  getPound: () => number;
};

type Kgs = {
  getKG: () => number;
};

type Weight = Pounds & Kgs;

let personWeight: Weight = {
  getKG() {
    return 0;
  },
  getPound() {
    return 4;
  },
};

//literal
type Price = 50 | 100;
let showP: Price = 100;
console.log(showP);

//null

function valueGet(value: number | null) {
  return value ? { squareVal: value * value } : undefined;
}

//chaining
let out = valueGet(null);
out?.squareVal; // exist or not

//interface vs type

interface Human {
  name: string;
  age: number;
  eat(): void;
}

interface Student extends Human {
  semester: number;
  study(): void;
}

let saad: Student = {
  name: "saad",
  age: 22,
  eat: () => console.log("Eating"),
  semester: 8,
  study: () => console.log("Study"),
};

console.log(saad);
