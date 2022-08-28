// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const numberArray = [2, 3, 4, 5, 6, 7, 8];
let sum = 0;
const average = (arr) => {
  for (let num of arr) {
    const squared = num ** 2;
    sum += squared;
  }
  const averageNumber = sum / arr.length;
  return averageNumber;
};
const findAverage = average(numberArray);
console.log(findAverage);
