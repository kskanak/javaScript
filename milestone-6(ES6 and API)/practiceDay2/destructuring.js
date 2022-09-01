const object = {
  hi: "hello",
  hello: "hi",
  yo: "ho",
  ho: "yo",
};

const { hello } = object;
console.log(hello);
const secondObject = hello;
console.log(secondObject);

// destructuring array

const number = [1, 3, 5, 6, 7];
const [one, two] = number;
const balance = two;
console.log(balance);
