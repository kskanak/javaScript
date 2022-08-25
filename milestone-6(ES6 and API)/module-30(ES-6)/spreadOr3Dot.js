const number = [2, 3, 4, 5, 4, 5];
const maxNumber = Math.max(...number);
const number2 = [...number, 12, 34, 34, 54];
number.push(11);
console.log(number);
console.log(number2);

const objects = {
  name: "what",
  age: 13,
};

const arr = [
  {
    name: "what",
    age: 13,
  },
];
console.log(objects);
