const noPerameterArrowFn = () => 89;

const result = noPerameterArrowFn();
console.log(result);

// arrow function with one peraMeter;
const singlePerMeter = (one) => one / 17;

console.log(singlePerMeter(17));

// arrow fucntion with two peraMeter;

const twoPerameter = (one, two) => (one + two) / 2;
console.log(twoPerameter(20, 30));

// multiple line arrowfunction

const multipleLine = (one, two) => {
  const firstNum = one + 7;
  const secondNum = two + 7;
  const result = firstNum + secondNum;
  return result;
};

const result2 = multipleLine(20, 54);
console.log(result2);
