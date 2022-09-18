const products = [
  { name: "watch", price: 12000, brand: "apple" },
  { name: "mobile", price: 120000, brand: "apple" },
  { name: "laptop", price: 120000, brand: "apple" },
  { name: "laptop", price: 100000, brand: "hp" },
  { name: "laptop", price: 110000, brand: "lenebo" },
  { name: "tablet", price: 110000, brand: "lenebo" },
  { name: "tablet", price: 12000, brand: "hp" },
];

// console.log(products);
const product_brand = products.map((product) => product.brand);
// console.log(product_brand);

const apple_brand = products.filter((product) => product);
// console.log(apple_brand);

products.forEach((product) => console.log(product.price));

const find = products.find((product) => product.price === 120000);
console.log(find);
