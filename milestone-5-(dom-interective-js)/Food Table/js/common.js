// function to take value from input field

function inputFieldValueByid(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputValue = parseInt(inputFieldString);
  return inputValue;
}
