const numbers = [12, 56, 44, 87];

const modulas = numbers.map((x) => x % 2);
console.log(modulas);

const products = [
  { name: "laptop", price: 55000 },
  { name: "mobile", price: 75000 },
  { name: "watch", price: 35000 },
  { name: "tablet", price: 25000 },
];

const allProductName = products.map((x) => x.name);
console.log(allProductName[0]);
