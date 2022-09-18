// declaring variables using let and const

let name = "kanak";
const tag = "ks";

//  condition

const num1 = 15;
const num2 = 15;

if (num1 > num2) {
  console.log("bigger");
} else if (num1 < num2) {
  console.log("smaller");
} else if (num1 === num2) {
  console.log("equail");
} else if (num1 !== num) {
  console.log("not equail");
} else if (num1 >= num2) {
  console.log("bigger or equal");
} else if (num1 <= num2) {
  console.log("bigger or equal");
}

// array

const number = [1, 3, 5, 8, 9, 100];

console.log(number.length);
const thirdIndexElement = number[3];
const indexOf = number.indexOf(5);
console.log(thirdIndexElement);
console.log(indexOf);
console.log(number);
number.push(10);
number.pop();
number.shift();
number.unshift(1000);
console.log(number);
console.log(number.includes(55));

// basic loop
for (let i = 0; i < number.length; i++) {
  console.log(i);
}

//  objects

const car = {
  brand: "apple",
  price: 299999,
  color: ["red", "black", "silver"],
  model: {
    name: "t9",
    release: 2022,
    auto: true,
  },
};
console.log(car);

// function

function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(num1, num2);
console.log(result);
