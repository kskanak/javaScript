// adding event to btn-phone-plus
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    // getting value and setting value to input field
    const quantity = inputFieldValue("phone-quantity-field", true);
    const mobileTotalPrice = document.getElementById("phone-total");
    mobileTotalPrice.innerText = quantity * 1219;
    //  all total
    allTotal();
  });

// adding event to btn-phone-minus

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const quantity = inputFieldValue("phone-quantity-field", false);
    const mobileTotalPrice = document.getElementById("phone-total");
    mobileTotalPrice.innerText = quantity * 1219;
    // all total
    allTotal();
  });
