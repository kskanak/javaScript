const add = (x, y) => x + y;
const result = add(2, 3);
console.log(result);

// single parameter arrow function, single line arrow function no need to have bracket for parameter

const add2 = (num) => num * 2;
const multiply = add2(4);
console.log(multiply);

// for multiple line use second bracket and return the final value

const add3 = (num1, num2, num3) => {
  const sum1 = num1 + num2;
  const sum2 = num2 + num3;
  const sum3 = num3 + num1;
  const total = sum1 + sum2 + sum3;
  return total;
};
const allTotal = add3(3, 4, 5);
console.log(allTotal);
