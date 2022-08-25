// adding event handler to deposit btn

document.getElementById("btn-deposit").addEventListener("click", function () {
  // getting value from deposit input field
  const newDeposit = inputFieldTextValue("deposit-field");
  // validation check
  if (isNaN(newDeposit) || newDeposit < 1) {
    alert("enter amount in numbers");
    return;
  }

  // getting value from total deposition
  const previousTotalDeposit = getValueFromElementText("diposition");
  //   adding total depositon
  const finalDeposition = previousTotalDeposit + newDeposit;
  // setting final deposition
  const finalDepositionAmount = setTotalValue("diposition", finalDeposition);
  // getting value from total balance
  const totalValue = getValueFromElementText("initial-balance");
  // adding to total value;
  const totalBalance = totalValue + newDeposit;
  // setting total value
  const SetFinalBalance = setTotalValue("initial-balance", totalBalance);
});
