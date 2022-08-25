//  adding event to btn-case-plus

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const caseQuantity = inputFieldValue("case-number-field", true);
  const caseTotalPrice = document.getElementById("case-total");
  caseTotalPrice.innerText = caseQuantity * 59;
  //  all total
  allTotal();
});

// adding event to btn-case-minus

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const caseQuantity = inputFieldValue("case-number-field", false);
    const caseTotalPrice = document.getElementById("case-total");
    caseTotalPrice.innerText = caseQuantity * 59;
    //  all total
    allTotal();
  });
