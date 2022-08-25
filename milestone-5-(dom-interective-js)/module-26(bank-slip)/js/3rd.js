//  creating btn event handler
document.getElementById("submit-btn").addEventListener("click", function () {
  // getting value form input email
  const inputEmail = document.getElementById("input-email");
  const userEmail = inputEmail.value;
  // getting value from input password
  const inputPassword = document.getElementById("input-password");
  const userPassword = inputPassword.value;
  console.log(userEmail, userPassword);
  // validation check
  if (userEmail.endsWith(".com") && userPassword === "1234") {
    window.location.href = "bank.html";
  } else {
    alert("Provide correct email and password please");
  }
});
// ------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// deposit section
// adding event handler to deposit btn
document.getElementById("btn-deposit").addEventListener("click", function () {
  // taking value from input deposit
  const depositField = document.getElementById("deposit-field");
  const newDeposite = depositField.value;
  depositField.value = "";
  if (isNaN(parseFloat(newDeposite))) {
    alert("give number please");
    return;
  }
  // taking value from deposition
  const deposit = document.getElementById("diposition");
  const previousDeposition = deposit.innerText;
  // adding new deposit to initail deposit
  deposit.innerText = parseFloat(previousDeposition) + parseFloat(newDeposite);
  // adding to main balance
  const initialBalance = document.getElementById("initial-balance");
  const totalBalance = initialBalance.innerText;
  initialBalance.innerText = parseFloat(totalBalance) + parseFloat(newDeposite);
});

//  withdrawl section

// adding event handler to withdrawl btn

document.getElementById("btn-withdrawl").addEventListener("click", function () {
  // taking value from withdrawl field
  const withdrawlField = document.getElementById("withdrawl-field");
  const withdrawlAmount = withdrawlField.value;
  const newAmount = parseFloat(withdrawlAmount);
  withdrawlField.value = "";
  if (isNaN(newAmount)) {
    alert("give number please");
    return;
  }
  // taking value from total withdrawl
  const withdrawl = document.getElementById("withdrawl");
  const mainWithdrawl = withdrawl.innerText;
  const totalWithdrawl = parseFloat(mainWithdrawl);

  // division form main balance
  const initialBalance = document.getElementById("initial-balance");
  const totalBalance = initialBalance.innerText;

  // validation check
  if (newAmount > totalBalance) {
    alert("stop");
    return;
  }
  // adding to main withdrawl
  withdrawl.innerText = totalWithdrawl + newAmount;
  initialBalance.innerText = parseFloat(totalBalance) - newAmount;
});
