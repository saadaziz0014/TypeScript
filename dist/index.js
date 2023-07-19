"use strict";
let a = 5;
let myStr = "Saad";
let myVar;
myVar = 5;
myVar = "saad";
const myFun = (data) => {
    console.log(data);
};
let evens = [2, 4, 6];
console.log(evens.length);
let myTupple = [1, "saad", true];
myTupple.push(2);
console.log(0);
function myFunction(n, calc) {
    let x = 0;
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
let dateT = new Date();
let myObj = {
    id: 1,
    name: "saad",
    expires: () => {
        return true;
    },
};
let prodObj = {
    sid: 1,
    expires: () => {
        let date = new Date();
        if (date.getFullYear() >= 2023) {
            return true;
        }
        else {
            return false;
        }
    },
};
let value = prodObj.expires();
console.log(value);
function myFunctionP(value) {
    if (typeof value == "string") {
        return parseInt(value) + 11;
    }
    else {
        return value + 11;
    }
}
let personWeight = {
    getKG() {
        return 0;
    },
    getPound() {
        return 4;
    },
};
let showP = 100;
console.log(showP);
function valueGet(value) {
    return value ? { squareVal: value * value } : undefined;
}
let out = valueGet(null);
out === null || out === void 0 ? void 0 : out.squareVal;
let saad = {
    name: "saad",
    age: 22,
    eat: () => console.log("Eating"),
    semester: 8,
    study: () => console.log("Study"),
};
console.log(saad);
//# sourceMappingURL=index.js.map