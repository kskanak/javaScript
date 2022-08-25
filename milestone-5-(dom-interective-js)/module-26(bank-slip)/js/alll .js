/* for index.html



// adding submit btn event handler
document.getElementById("submit-btn").addEventListener("click", function () {
  // taking value from input email
  const inputEmail = document.getElementById("input-email");
  const userEmail = inputEmail.value;
  // taking value from input password
  const inputPassword = document.getElementById("input-password");
  const userPassword = inputPassword.value;
  // validation cheeck
  if (userEmail.endsWith(".com") && userPassword === "1234") {
    location.href = "bank.html";
  } else {
    alert("Type Email and password correctly");
  }
});





*/

/*  for bank.html











// bank inner js
document.getElementById("btn-deposit").addEventListener("click", function () {
  //  getting value from deposite input
  const dipositField = document.getElementById("deposit-field");
  const newDipositAmount = dipositField.value;

  // get the current deposit total
  const diposition = document.getElementById("diposition");
  const PreviousDipositionValue = diposition.innerText;
  const totalDipositAmount =
    parseFloat(newDipositAmount) + parseFloat(PreviousDipositionValue);
  diposition.innerText = totalDipositAmount;
  // adding to main initial Balance
  const initailBalance = document.getElementById("initial-balance");
  const mainBalance = initailBalance.innerText;
  initailBalance.innerText =
    parseFloat(mainBalance) + parseFloat(newDipositAmount);
  dipositField.value = "";
});

// withdrawl --------------------------------------

document.getElementById("btn-withdrawl").addEventListener("click", function () {
  // getting new withdrawl amount from input
  const withdrawlField = document.getElementById("withdrawl-field");
  const newWithdrawlAmount = withdrawlField.value;
  // adding to total withdrawl
  const withdrawl = document.getElementById("withdrawl");
  const previousWithdrawl = withdrawl.innerText;
  const totalWithdrawl =
    parseFloat(previousWithdrawl) + parseFloat(newWithdrawlAmount);
  withdrawl.innerText = totalWithdrawl;
  // subtracting from main balance
  const initailBalance = document.getElementById("initial-balance");
  const mainBalance = initailBalance.innerText;
  initailBalance.innerText =
    parseFloat(mainBalance) - parseFloat(newWithdrawlAmount);
  withdrawlField.value = "";
});








*/
