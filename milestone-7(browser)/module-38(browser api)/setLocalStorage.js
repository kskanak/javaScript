const getvalueById = (Id) => {
  const field = document.getElementById(Id);
  const value = field.value;
  field.value = "";
  return value;
};

document.getElementById("addBtn").addEventListener("click", function () {
  const product = getvalueById("product");
  const quantity = getvalueById("quantity");
  console.log(product, quantity);
  displayOnUI(product, quantity);
  setItemToLocalStorage(product, quantity);
});

const displayOnUI = (product, quantity) => {
  const container = document.getElementById("container");
  const li = document.createElement("li");
  li.innerText = ` ${product} : ${quantity}`;
  container.appendChild(li);
};

const getItemFromLocalStorage = () => {
  const StringElectronics = localStorage.getItem("electronics");
  let electronics = {};
  if (StringElectronics) {
    electronics = JSON.parse(StringElectronics);
  }
  return electronics;
};

const setItemToLocalStorage = (product, quantity) => {
  const electronics = getItemFromLocalStorage();
  electronics[product] = quantity;
  const stringifiedElectronics = JSON.stringify(electronics);
  localStorage.setItem("electronics", stringifiedElectronics);
};

const setUifromLocalStorage = () => {
  const items = getItemFromLocalStorage();
  for (const item in items) {
    displayOnUI(item, items[item]);
  }
};
setUifromLocalStorage();
