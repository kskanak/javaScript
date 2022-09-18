const products = ["names", "price", "brand"];

const objects = {
  name: "kanak",
  age: 26,
  like: "ice_cream",
};

const [names, price, brand] = products;
console.log(names, price, brand);

const { name, age, like } = objects;
console.log(name, age, like);
