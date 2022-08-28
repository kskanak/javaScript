// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

const numbers = [1, 9, 17, 22];
let sum = 0;
for (number of numbers) {
  sum += number;
}
console.log(sum);

const sumNumber = numbers.reduce((previous, recent) => previous + recent, 0);
console.log(sumNumber);
