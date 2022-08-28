const useConst = "when its value is fixed";
let useLet = "when its value can be reAssign";
console.log(useConst, useLet);
useLet = "changing let";
console.log(useLet);

const object = {
  name: "ks",
  age: 29,
  seeking: "meaning of life",
};
const templeteString = `
  using templete String to use variablr ${useConst} and ${useLet},
  My Name is ${object.name}, 
  My age is ${object.age}, 
  I am seeking the ${object.seeking}
`;

console.log(templeteString);

//  write a arrow function which will take one parameter and will divide that parameter number and return the rest
const divisibleBy5 = (number) => number / 5;

console.log(divisibleBy5(15));

// arrow function will take 2 parameter, add 2 with them and multyply the number and return the result

const multiply = (num1, num2) => (num1 + 2) * (num2 + 2);
const result = multiply(2, 4);
console.log(result);
