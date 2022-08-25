const numbers = [12, 34, 545, 645];

const bigNumber = numbers.find((n) => n > 400);
console.log(bigNumber);

const products = [
  { name: "laptop", price: "86000" },
  { name: "mobile", price: "35000" },
  { name: "watch", price: "25000" },
];

const item = products.find((p) => p.price >= 35000);
console.log(item);
