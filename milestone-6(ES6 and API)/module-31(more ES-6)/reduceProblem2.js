const people = [
  { name: "mena", age: 20 },
  { name: "rina", age: 15 },
  { name: "suchorita", age: 22 },
];

let sum = 0;
for (pep of people) {
  sum += pep.age;
}

console.log(sum);

const sumOfAge = people.reduce((previous, recent) => previous + recent.age, 0);
console.log(sumOfAge);
