// problem- 1.1--write an arrow function that will take 3 parameters and multiply the parameter and return the result;

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 4, 6);
console.log(result);

// problem -1.2 write the following sentece in three line
/* 
  i am a web developer 
  i love code
  i love ice cream
*/

const threeLine = `
I  am a Web Developer
I love code
I love Ice  cream
`;
console.log(threeLine);

// problem 1.2 write an function that will take 2 parameter and one will be provided and other will be default parameters, add those those parameters and retunr the sum

const sum = (a, b = 0) => a + b;
const sumResult = sum(10);
console.log(sumResult);
