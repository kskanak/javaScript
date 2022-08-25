// all select btn

let totalPrice = 0;

const selectBtnCollection = document.getElementsByClassName("selectBtn");
for (let selectBtn of selectBtnCollection) {
  selectBtn.addEventListener("click", function (event) {
    const itemName =
      event.target.previousElementSibling.previousElementSibling.innerText;

    const itemQty =
      event.target.previousElementSibling.previousElementSibling
        .nextElementSibling.children[0].children[1].value;

    event.target.previousElementSibling.previousElementSibling.nextElementSibling.children[0].children[1].value =
      "";

    const itemPrice =
      event.target.previousElementSibling.previousElementSibling
        .nextElementSibling.children[2].innerText;

    const itemContainer = document.getElementById("Favourite-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="font-bold">${itemName}</td>
    <td class="font-bold">${itemPrice}</td>
    <td class="font-bold">${itemQty}</td>
    <td class="font-bold">${itemPrice * itemQty}</td>
    `;
    itemContainer.appendChild(tr);
    // calculation total price
    console.log(totalPrice);
    totalPrice += parseInt(`${itemPrice * itemQty}`);
    console.log(totalPrice);
    // adding event handler to calculate btn
    document
      .getElementById("calculate-btn")
      .addEventListener("click", function () {
        // setting total price
        setElementValueById("price", totalPrice);
        // setting tax value
        const tax = totalPrice * 0.05;
        setElementValueById("tax", tax);
        // setting total price
        const netPrice = totalPrice + tax;
        setElementValueById("total-price", netPrice);
      });
  });
}
