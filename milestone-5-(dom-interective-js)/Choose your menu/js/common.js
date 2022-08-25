//  function to get inputFieldvalue

function inputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldString);
  const setValue = inputFieldValue + 1;
  inputField.value = setValue;
  return inputFieldValue;
}
//  function to set value

function setElementValueById(elementId, value) {
  if (isNaN(value)) {
    return;
  } else {
    const element = document.getElementById(elementId);
    element.innerText = value;
  }
}

// function to set input value by id
