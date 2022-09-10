// console.log([] == true);

// const arr = [];
// if (arr) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (true === "true") {
//   console.log("true");
// } else {
//   console.log("false");
// }

const checkNumber = (input) => {
  if (isNaN(input)) {
    return "false";
  } else {
    return "true";
  }
};

const check = checkNumber("111");
console.log(check);
