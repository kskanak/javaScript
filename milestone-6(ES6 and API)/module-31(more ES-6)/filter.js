const numbers = [2, 4, 5, 6, 8, 10];

const biggerThan5 = numbers.filter((x) => x > 5);
console.log(biggerThan5);

const friends = ["ks", "khaled", "khaladul", "kanak"];

const evenName = friends.filter((n) => n.length % 2 === 0);
console.log(evenName);

const products = [
  { name: "laptop", price: 55000 },
  { name: "mobile", price: 75000 },
  { name: "watch", price: 35000 },
  { name: "tablet", price: 25000 },
];
const allPrice = products.map((x) => x.price);
const upperThan25k = products.filter((p) => p.price > 40000);
console.log(allPrice, upperThan25k);
