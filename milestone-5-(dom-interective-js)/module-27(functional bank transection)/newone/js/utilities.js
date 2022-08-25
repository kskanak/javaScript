// writing a functin to get inputvalue from inputput

function inputFieldTextValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  inputField.value = "";
  const inputValue = parseFloat(inputFieldString);
  return inputValue;
}

// writing a function  to get text element value

function textElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementString = textElement.innerText;
  const textElementValue = parseFloat(textElementString);
  return textElementValue;
}

// writing a function to set value
function setValueById(elementId, newTotalValue) {
  const setValue = document.getElementById(elementId);
  setValue.innerText = newTotalValue;
}
