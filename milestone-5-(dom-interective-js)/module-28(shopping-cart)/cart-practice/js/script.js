// writing a function to take value from inputField

function inputFieldValue(inputFieldId, isIncrease) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseInt(inputFieldString);
  //   setinputValue
  let setNewValue;
  if (isIncrease === true) {
    setNewValue = inputFieldValue + 1;
  } else {
    setNewValue = inputFieldValue - 1;
  }
  inputField.value = setNewValue;
  return setNewValue;
  //
}

//  taking value from total
function productValurById(productId) {
  const product = document.getElementById(productId);
  const productValueString = product.innerText;
  const productValue = parseInt(productValueString);
  return productValue;
}

function allTotal() {
  const phoneValue = productValurById("phone-total");
  const caseValue = productValurById("case-total");
  const newSubTotal = phoneValue + caseValue;

  //  getting subtotal value by id and setting subTotal
  const subTotal = document.getElementById("sub-total");
  subTotal.innerText = newSubTotal;
  const setSubTotal = subTotal.innerText;
  //  setting text
  const texAmount = document.getElementById("tax-amount");
  texAmount.innerText = (setSubTotal * 0.1).toFixed(2);
  const setTexAmount = texAmount.innerText;

  // setting total price
  const finalTotal = document.getElementById("final-total");
  finalTotal.innerHTML = parseInt(setSubTotal) + parseFloat(setTexAmount);
}
