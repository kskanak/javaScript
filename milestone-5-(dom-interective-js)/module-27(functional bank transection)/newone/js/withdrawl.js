// adding event to withdrawl btn
document.getElementById("withdrawl-btn").addEventListener("click", function () {
  // taking value from input withdrawl
  const newWithdraAmount = inputFieldTextValue("input-withdrawl");
  // validation check
  if (isNaN(newWithdraAmount) || newWithdraAmount < 1) {
    alert("Enter Amount In Numbers Please");
    return;
  }
  // taking text element value
  const previousWithdrawl = textElementValueById("total-withdrawl");
  // calculation total withdrawl
  const totalWithdrawl = previousWithdrawl + newWithdraAmount;
  // taking main balance
  const mainBalnce = textElementValueById("main-balance");
  //  balance validation checki
  if (newWithdraAmount > mainBalnce) {
    alert("Not Have Sufficient Balance");
    return;
  }
  // setting total withdrawl
  const setTotalWithdrawl = setValueById("total-withdrawl", totalWithdrawl);
  //  calculation new main balance
  const newMainBalance = mainBalnce - newWithdraAmount;
  // setting new main balance
  const setNewBalance = setValueById("main-balance", newMainBalance);
});
