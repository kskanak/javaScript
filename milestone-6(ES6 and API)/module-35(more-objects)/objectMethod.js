const car = {
  name: "tesla",
  ceo: "elon",
  model: "t9",
  price: 230000,
  onCharge: true,
  start: function (key) {
    return `${this.name} starts on ${key} `;
  },
  isBattery: function (value) {
    return this.start();
  },
  totalPrice: function (tax) {
    this.start();
    const total = this.price - tax;
    return total;
  },
};

const carStart = car.start("remote");
console.log(carStart);
console.log(car.isBattery(10));
const totalPrice = car.totalPrice(20);
console.log(totalPrice);
