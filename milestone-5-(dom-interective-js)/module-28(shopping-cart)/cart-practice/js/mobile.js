// adding event to btn-phone-plus
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    // taking value from inputField
    const quantity = inputFieldValue("phone-quantity-field", true);
    const phoneTotal = document.getElementById("phone-total");
    phoneTotal.innerText = quantity * 1219;
    const totalPhoneValue = phoneTotal.innerText;

    //  setting subtotal value
    allTotal();
  });

//  adding event to btn-phone-minus

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const quantity = inputFieldValue("phone-quantity-field", false);
    const phoneTotal = document.getElementById("phone-total");
    phoneTotal.innerText = quantity * 1219;
    //  setting subtotal value
    allTotal()();
  });
