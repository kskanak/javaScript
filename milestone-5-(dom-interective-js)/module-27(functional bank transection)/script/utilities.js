//  writing a function to get value from input field

function inputFieldTextValue(inputFieldId) {
  const inputFieldText = document.getElementById(inputFieldId);
  const inputFieldTextString = inputFieldText.value;
  const inputFieldValue = parseFloat(inputFieldTextString);
  inputFieldText.value = "";
  return inputFieldValue;
}

// writing a funchtion to get value from element

function getValueFromElementText(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementValue = parseFloat(elementString);
  return elementValue;
}

function setTotalValue(elementId, finalValue) {
  const element = document.getElementById(elementId);
  element.innerText = finalValue;
}
