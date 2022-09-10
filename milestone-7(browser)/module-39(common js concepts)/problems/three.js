const arethmeticOperation = (num1, num2, operation) => {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  } else if (operation === "modulus") {
    return num1 % num2;
  } else {
    return "invalid Operation";
  }
};

const givenOperation = arethmeticOperation(15, 5, " ");
console.log(givenOperation);
