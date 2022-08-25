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

const allAge = people.map((peopleAge) => peopleAge.age);
console.log(allAge);
const ageSum = allAge.reduce((previous, current) => previous + current, 0);
console.log(ageSum);

const result = people.reduce((prev, recent) => prev + recent.age, 0);
console.log(result);
