// adding event to buy now btn
document.getElementById("buyNow-btn").addEventListener("click", function () {
  // getting value from input
  const inputPrice = document.getElementById("input-price");
  const inputString = inputPrice.value;
  const inputAmount = parseFloat(inputString);
  // calculating discount price
  const discountAmount = (inputAmount * 30) / 100;
  // setting to discount amount
  const setDiscountAmount = document.getElementById("discount");
  setDiscountAmount.innerText = discountAmount;
  // calculating netamount
  const netPrice = inputAmount - discountAmount;
  // setting the netPrice
  const setNetPrice = document.getElementById("net-price");
  setNetPrice.innerText = netPrice;
});

//  condition set on btn
const inputDom = document.getElementById("input-dom");
inputDom.addEventListener("keyup", function (event) {
  const value = event.target.value;
  const buyNowBtn = document.getElementById("buyNow-btn");
  if (value === "DOM") {
    buyNowBtn.removeAttribute("disabled");
  } else {
    buyNowBtn.setAttribute("disabled", true);
  }
});
