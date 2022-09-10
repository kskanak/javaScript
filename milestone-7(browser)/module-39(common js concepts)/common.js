// javaScript dynamic type programming language

// data type 1: primitive and 2: non-primitive

// 1: number, string, boolean
// 2: array, objects

// non primitive data type reference dhore rakhe, pertially change hole o but jodi variable redeclare kora hoi tahole new reference catch kore

let num1 = [1, 3, 4, 5, 6, 8];
let num2 = num1;
console.log(num1, num2);

let one = { job: "web Developer" };
let two = one;
two.job = "backend Developer";
console.log(one, two);
