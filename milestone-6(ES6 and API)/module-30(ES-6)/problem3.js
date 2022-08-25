// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const numberArray = [2, 3, 4, 5, 6, 7, 8];

const average = (numbers) => {
  let sum = 0;
  for (let number of numbers) {
    let squared = Math.pow(number, 2);
    sum += squared;
  }
  const averageSum = sum / numbers.length;
  return averageSum;
};

const array = average(numberArray);
console.log(array);
