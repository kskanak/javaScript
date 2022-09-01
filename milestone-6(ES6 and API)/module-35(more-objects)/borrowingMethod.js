const car = {
  name: "tesla",
  ceo: "elon",
  model: "t9",
  price: 230000,
  onCharge: true,
  start: function () {
    return `${this.name} starts on Battery`;
  },
  isBattery: function (value) {
    return this.start();
  },
  totalPrice: function (tax) {
    this.price = this.price - tax;
    return this.price;
  },
};

const totalprice = car.totalPrice(21);
console.log(totalprice);
const toyota = {
  brand: "toyota",
  price: 20000,
};

// borrowed method by call
const price1 = car.totalPrice.call(toyota, 1000);
console.log(price1);

// borrowed method by apply
const price2 = car.totalPrice.apply(toyota, [2000]);
console.log(price2);

//  borrowed method by bind

const price3 = car.totalPrice.bind(toyota);
price3(5000);

console.log(toyota);
