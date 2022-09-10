//  there are three modal type in browser

// alert

const showalert = () => {
  const num = Math.round(Math.random() * 10);
  if (num < 5) {
    alert("value is less than 5");
  }
};

// confirm asking for confirmation, it return true of false value;

const showConfirl = () => {
  const confirmationMsg = confirm("are you ??");
  console.log(confirmationMsg);
  if (confirmationMsg === true) {
    alert("welcome");
  } else {
    console.log("dmg");
  }
};

// prompt uses for user input
const showprompt = () => {
  const inputValue = prompt("give your name");
  if (!!inputValue) {
    alert("input successful");
  } else {
    alert("give input");
  }
};
