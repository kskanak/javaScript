//  adding click event to pin generate btn
document
  .getElementById("pin-generate-btn")
  .addEventListener("click", function () {
    // pin generator
    const pinNumber = Math.round(Math.random() * 10000);
    const pin = pinNumber + "";
    // setting value from input pin
    const inputField = document.getElementById("input-pin");
    if (pin.length < 4) {
      return pin;
    }
    inputField.value = pin;
    //
  });

// adding event to submit btn
document.getElementById("submit-btn").addEventListener("click", function () {
  const inputEmail = document.getElementById("input-email");
  const email = inputEmail.value;

  const inputPassword = document.getElementById("input-password");
  const password = inputPassword.value;

  if (email.endsWith(".com") && password === "1234") {
    window.location.href = "main.index";
  } else {
    alert("Provide Correct email and password");
    return;
  }
});

// adding event to pin match input

const matchPinInput = document.getElementById("pin-match");
matchPinInput.addEventListener("keyup", function (event) {
  const matchValue = event.target.value;
  const pin = inputFieldValueByid("input-pin");
  console.log(pin);
  if (pin == matchValue) {
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.removeAttribute("disabled", false);
    submitBtn.style.backgroundColor = "darkgreen";
  }
});
