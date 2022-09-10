const inputValueById = (Id) => {
  const inputField = document.getElementById(Id);
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

document.getElementById("addBtn").addEventListener("click", function () {
  const product = inputValueById("inputItem");
  const quantity = inputValueById("inputQuantity");
  console.log(product, quantity);
  setToLocalStorage(product, quantity);
  displayOnUi(product, quantity);
});

const displayOnUi = (product, quantity) => {
  const container = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = ` ${product} : ${quantity} `;
  container.appendChild(li);
};
const getLocalStorageItem = () => {
  const savedCart = localStorage.getItem("cart");
  let cart = {};
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
  return cart;
};

const setToLocalStorage = (product, quantity) => {
  const cart = getLocalStorageItem();
  cart[product] = quantity;
  const cartStringfy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringfy);
};

const setTodisplayFromLocalStorage = () => {
  const cartItem = getLocalStorageItem();
  for (const item in cartItem) {
    displayOnUi(item, cartItem[item]);
  }
};
setTodisplayFromLocalStorage();
