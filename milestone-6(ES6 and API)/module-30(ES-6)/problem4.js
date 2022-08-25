// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

const firstNumberArray = [2, 43, 545, 656, 575, 756];
const secondNumberArray = [45, 544, 4540, 23, 434, 345];
const newArray = [...firstNumberArray, ...secondNumberArray];
console.log(newArray);
const maxNumber = Math.max(...newArray);
console.log(maxNumber);
