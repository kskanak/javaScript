// problem 1.1 You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const numbers = [1, 3, 5, 7, 9];
const evenNumbers = [];
for (number of numbers) {
  evenNumbers.push(number + 1);
}
console.log(evenNumbers);

const even = numbers.map((n) => n + 1);
console.log(even);
