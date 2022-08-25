// adding event handler to deposit btn
document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDeposit = inputFieldTextValue("input-deposit");
  // validation check
  if (isNaN(newDeposit) || newDeposit < 1) {
    alert("Enter Amount In Numbers Please");
    return;
  }
  // taking value from deposit element
  const previousDeposit = textElementValueById("deposited");
  // adding total deposit
  const totalDeposit = previousDeposit + newDeposit;
  //  setting total deposit
  const setNewTotalDeposit = setValueById("deposited", totalDeposit);
  //  taking value from total balance
  const balance = textElementValueById("main-balance");
  //   calculation total value
  const newTotalBalance = balance + newDeposit;
  // setting newTotalBalance
  const setNewTotalBalance = setValueById("main-balance", newTotalBalance);
});
