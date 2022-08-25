//  adding event to btn-case-plus
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const quantity = inputFieldValue("case-number-field", true);
  const caseTotal = document.getElementById("case-total");
  caseTotal.innerText = quantity * 59;
  //  setting subtotal value
  allTotal();
});

// adding event to btn-case-minuns
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const quantity = inputFieldValue("case-number-field", false);
    const caseTotal = document.getElementById("case-total");
    caseTotal.innerText = quantity * 59;
    //  setting subtotal value
    allTotal();
  });
