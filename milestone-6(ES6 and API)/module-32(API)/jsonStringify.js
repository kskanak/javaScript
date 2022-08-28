// json stringfi converty object to json.string

const car = {
  brand: "tesla",
  model: "t9",
  price: 8500000,
  oncCharge: true,
};
console.log(car.price);
const stringified = JSON.stringify(car);
console.log(stringified.price);

//  json parse covert string to json.object

const carObject = JSON.parse(stringified);
console.log(carObject);
