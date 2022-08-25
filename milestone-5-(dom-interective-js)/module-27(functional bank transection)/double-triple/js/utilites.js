// writing a function for input field value

function inputFieldValue(inputId) {
  const inputFieldId = document.getElementById(inputId);
  const inputString = inputFieldId.value;
  const inputValue = parseFloat(inputString);
  inputFieldId.value = "";
  return inputValue;
}

// writing a function for taking value from element

function elementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementNumber = parseFloat(elementString);
  return elementNumber;
}

// function to set value

function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
