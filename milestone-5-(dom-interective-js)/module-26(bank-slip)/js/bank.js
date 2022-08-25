//---------------------------------------deposit part begin----------------------------------------
// adding event handler to diposit btn
document.getElementById("btn-deposit").addEventListener("click", function () {
  // taking value from deposit input
  const depositField = document.getElementById("deposit-field");
  const newDipositString = depositField.value;
  const newDipositionAmount = parseFloat(newDipositString);
  depositField.value = "";
  if (isNaN(newDipositionAmount) || newDipositionAmount < 1) {
    alert("provide your amounts in numbers please");
    return;
  }
  // taking innerText from total diposition
  const diposited = document.getElementById("diposition");
  const dipositedString = diposited.innerText;
  const totalDiposited = parseFloat(dipositedString);
  // addding to total diposited
  diposited.innerText = totalDiposited + newDipositionAmount;
  //  addtion deposti amount to total balance
  const initialBalance = document.getElementById("initial-balance");
  const balanceString = initialBalance.innerText;
  const totalBalance = parseFloat(balanceString);
  initialBalance.innerText = totalBalance + newDipositionAmount;
});
// ------------------------------------ deposit part end----------------------------------------------------------------------
// ----------------------------------------withdrawl part begin------------------------------------------------------------
// adding event handler to withdrawl btn
document.getElementById("btn-withdrawl").addEventListener("click", function () {
  // taking value from input withdrawl
  const inputField = document.getElementById("withdrawl-field");
  const newWithdrawlString = inputField.value;
  const newWithdrawlAmount = parseFloat(newWithdrawlString);
  inputField.value = "";
  // validation check
  if (isNaN(newWithdrawlAmount) || newWithdrawlAmount < 1) {
    alert("privide amount in positve numbers");
    return;
  }
  // taking innerText from total withdrawl
  const withdrawl = document.getElementById("withdrawl");
  const withdrawlString = withdrawl.innerText;
  const totalWithdrawl = parseFloat(withdrawlString);

  //  subtraction from main balance
  const initialBalance = document.getElementById("initial-balance");
  const balanceString = initialBalance.innerText;
  const mainBalance = parseFloat(balanceString);
  if (newWithdrawlAmount > mainBalance) {
    alert("Dont have sufficient Balance");
    return;
  }
  // adding to total total withdrawl
  withdrawl.innerText = totalWithdrawl + newWithdrawlAmount;
  initialBalance.innerText = mainBalance - newWithdrawlAmount;
});
