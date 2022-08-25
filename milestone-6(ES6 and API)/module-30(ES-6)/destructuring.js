const { name, age } = { name: "wow", age: 12 };
console.log(name);

const [one, two] = [
  { name: "wow", age: 12 },
  { name: "wow1", age: 13 },
  { name: "wow2", age: 14 },
  { name: "wow3", age: 15 },
];
console.log(one.name, two);
