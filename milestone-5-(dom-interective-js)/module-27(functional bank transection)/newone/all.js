// all
//writing a fucntion to get input value from withdrawl input
function inputFieldTextvalue(inputId) {
  const inputFieldText = document.getElementById(inputId);
  const inputString = inputFieldText.value;
  const inputValue = parseFloat(inputString);
  inputFieldText.value = "";
  return inputValue;
}

// writing a function to get element text value from  elements

function elementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementValue = parseFloat(elementString);
  return elementValue;
}

// writing a function to set value;

function setValueById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}
// ------------------------------------------------------------------------------------
// adding event to deposit btn
document.getElementById("deposit-btn").addEventListener("click", function () {
  // getting value from inputField deposit
  const newDeposit = inputFieldTextvalue("input-deposit");
  if (isNaN(newDeposit) || newDeposit < 1) {
    alert("Enter amount in numbers please");
    return;
  }
  // gettting value from elementText
  const previousDeposit = elementValueById("deposited");
  //  additon of total deposit
  const totalDeposit = previousDeposit + newDeposit;

  // set total deposit
  const setDeposit = setValueById("deposited", totalDeposit);
  // getting value form balance
  const balance = elementValueById("main-balance");
  // adding to total balance
  const totalBalance = balance + newDeposit;
  // setting balance
  const setBalance = setValueById("main-balance", totalBalance);
});
// ---------------------------------------------------------------------------------------------------------------
//  adding event to withdrawl btn
document.getElementById("withdrawl-btn").addEventListener("click", function () {
  //  getting input value from withdrawl input
  const newWithdrawl = inputFieldTextvalue("input-withdrawl");
  if (isNaN(newWithdrawl) || newWithdrawl < 1) {
    alert("Enter a valid number please");
    return;
  }
  //  getting value from elementText
  const previousWithdrawl = elementValueById("total-withdrawl");
  //  calculating total withdrawl
  const totalWithdrawl = previousWithdrawl + newWithdrawl;

  // getting value from total balance
  const balance = elementValueById("main-balance");
  if (newWithdrawl > balance) {
    alert("Dont have sufficient balance");
    return;
  }
  // setting total withdrawl
  const setWithdrawl = setValueById("total-withdrawl", totalWithdrawl);
  //  calculation total balance
  const totalBalance = balance - newWithdrawl;
  // setting total balance
  const setBalance = setValueById("main-balance", totalBalance);
});
