const car = {
  one: {
    work: "yes",
    done: "none",
    noe: "yap",
  },
  two: [1, 3, 4, 5, 6, 3],
  three: "hello",
  four: function () {
    return this.one;
  },
  five: "yes",
};

// console.log(car);
const method = car.four();
// console.log(method);
const { one, two, three, five } = car;
const { work, done, noe } = one;
const [fist, second] = two;
console.log(one, two, three, five);

// two

const templetee = `setting value of object ${done}, ${second},${three}, ${five} `;
console.log(templetee);
