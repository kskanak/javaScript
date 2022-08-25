// addding event hander to generate pin btn
document.getElementById("generate-pin").addEventListener("click", function () {
  // generation random pin number
  const randomNumber = Math.round(Math.random() * 10000);
  const pin = randomNumber + "";

  if (pin.length < 4) {
    return pin;
  }

  //  displaying pin numbe to pin display
  const pinDisplay = document.getElementById("display-pin");
  pinDisplay.value = pin;
});

//  adding event to calculator

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const character = event.target.innerText;
    const allCharacter = character + "";

    const typedNumbersDisplay = document.getElementById("typed-numbers");
    const previousCharacter = typedNumbersDisplay.value;

    if (allCharacter === "C") {
      typedNumbersDisplay.value = "";
    } else if (allCharacter === "<") {
      const element = previousCharacter.split("");
      element.pop();
      const elementJoin = element.join("");
      typedNumbersDisplay.value = elementJoin;
    } else {
      const newCharacters = previousCharacter + allCharacter;
      typedNumbersDisplay.value = newCharacters;
    }
  });

// addding event to submit btn

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPin = document.getElementById("display-pin");
  const displayValue = displayPin.value;

  const typedNumbersDisplay = document.getElementById("typed-numbers");
  const typedDisplayValue = typedNumbersDisplay.value;

  if (displayValue === typedDisplayValue) {
    const pinSuccessMessage = document.getElementById("pin-success");
    pinSuccessMessage.style.display = "block";

    const pinFailureMessage = document.getElementById("pin-failure");
    pinFailureMessage.style.display = "none";
  } else {
    const pinFailureMessage = document.getElementById("pin-failure");
    pinFailureMessage.style.display = "block";

    const pinSuccessMessage = document.getElementById("pin-success");
    pinSuccessMessage.style.display = "none";
  }
});
