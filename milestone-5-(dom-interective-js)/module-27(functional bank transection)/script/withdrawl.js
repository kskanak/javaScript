// adding event to withdrawl btn

document.getElementById("btn-withdrawl").addEventListener("click", function () {
  // getting value from input withdrawl
  const newWithdrawl = inputFieldTextValue("withdrawl-field");
  if (isNaN(newWithdrawl) || newWithdrawl < 1) {
    alert("Enter amount in numbers please");
    return;
  }
  //  getting value from withdrawl elementText
  const previousTotalWithdrawl = getValueFromElementText("withdrawl");
  // adding total withdrawl
  const totalWithdrawl = previousTotalWithdrawl + newWithdrawl;

  // getting total balance
  const balance = getValueFromElementText("initial-balance");
  //  balance cheeck validation
  if (newWithdrawl > balance) {
    alert("Not enough balance");
    return;
  }
  // setting  total withdrawl
  const setWithdrawlAmount = setTotalValue("withdrawl", totalWithdrawl);
  // calculate new balance total by subtraction new balance from total balance
  const totalBalance = balance - newWithdrawl;
  //  setting total balance
  const setFinalBalance = setTotalValue("initial-balance", totalBalance);
});
