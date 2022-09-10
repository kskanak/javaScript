console.log("one");
setTimeout(() => {
  console.log("two");
}, 3500);
console.log("three");

setTimeout(() => {});

// prompt
const userInput = () => {
  const userNumebr = prompt("give me a number");
  const number = parseInt(userNumebr);
  const result = number + 200;
  alert(result);
};

const confirmMsg = () => {
  const returnMst = confirm("do you wanna see your website link");
  if (!!returnMst) {
    console.log(location.href);
  }
};
