//  adding event to generate-pin
document.getElementById("generate-pin").addEventListener("click", function () {
  //  generating random pin
  const randomNumber = Math.round(Math.random() * 10000);
  const pinNumberString = randomNumber + "";
  if (pinNumberString.length < 4) {
    return pinNumberString;
  }
  //  taking valur from pin display input and setting pin to pin display
  const pinDisplay = document.getElementById("display-pin");
  pinDisplay.value = pinNumberString;
  // adding event delicator to calculator
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const character = event.target.innerText;

    const typedDisplay = document.getElementById("typed-numbers");
    const previousDisplayNumber = typedDisplay.value;

    const newDisplayNumber = previousDisplayNumber + character;

    if (character === "C") {
      typedDisplay.value = "";
    } else if (character === "<") {
      const displayString = previousDisplayNumber.split("");
      displayString.pop();
      const displayNumber = displayString.join("");
      typedDisplay.value = displayNumber;
    } else {
      typedDisplay.value = newDisplayNumber;
    }
    // setting value to typed number display
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const displayPinFieldValue = displayPinField.value;

  const typedNumbersField = document.getElementById("typed-numbers");
  const typedNumbersFieldValue = typedNumbersField.value;

  if (displayPinFieldValue === typedNumbersFieldValue) {
    const successMessage = document.getElementById("pin-success");
    successMessage.style.display = "block";
    const failureMessage = document.getElementById("pin-failure");
    failureMessage.style.display = "none";
  } else {
    const failureMessage = document.getElementById("pin-failure");
    failureMessage.style.display = "block";
    const successMessage = document.getElementById("pin-success");
    successMessage.style.display = "none";
  }
});
