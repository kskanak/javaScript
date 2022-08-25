// adding event to submit btn
document.getElementById("submit-btn").addEventListener("click", function () {
  //  taking value from input email
  const inputEmail = document.getElementById("input-email");
  const userEmail = inputEmail.value;
  // taking value from input password
  const inputPassword = document.getElementById("input-password");
  const userPassword = inputPassword.value;
  // validation check
  if (userEmail.endsWith(".com") && userPassword === "1234") {
    window.location.href = "bank.html";
  } else {
    alert("provide a email and password in numbers");
  }
});
