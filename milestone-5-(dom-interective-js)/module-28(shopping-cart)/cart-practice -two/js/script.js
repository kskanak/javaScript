// getting input value and adding plus and minus function and returning the quantity

function inputFieldValue(inputFieldId, isincrease) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseInt(inputFieldString);

  let newInputValue;
  if (isincrease === true) {
    newInputValue = inputFieldValue + 1;
  } else {
    newInputValue = inputFieldValue - 1;
  }
  inputField.value = newInputValue;
  return newInputValue;
}
//  getting element value function
function getElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementNumber = parseInt(elementString);
  return elementNumber;
}

// set function
function setTotal(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function allTotal() {
  const mobilePrice = getElementById("phone-total");
  const casePrice = getElementById("case-total");

  //  setting subTotal
  const subTotal = mobilePrice + casePrice;
  setTotal("sub-total", subTotal);
  console.log(typeof subTotal);

  //  setting tex
  const taxstring = (subTotal * 0.1).toFixed(2);
  const tax = parseFloat(taxstring);
  setTotal("tax-amount", tax);

  //  setting total
  const total = subTotal + tax;
  setTotal("final-total", total);
}
