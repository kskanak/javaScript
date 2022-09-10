const inputValueById = (inputid) => {
  const inputField = document.getElementById(inputid);
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

//  add name btn
document.getElementById("addName").addEventListener("click", function () {
  const name = inputValueById("name");
  setItemToLocalStorage("name", name);
});

// delete name btn

document.getElementById("deleteName").addEventListener("click", function () {
  localStorage.removeItem("name");
});

// email add btn

document.getElementById("addemail").addEventListener("click", function () {
  const email = inputValueById("email");
  setItemToLocalStorage("email", email);
});

// email delete btn

document.getElementById("deleteEmail").addEventListener("click", function () {
  localStorage.removeItem("email");
});

//  msg add btn

document.getElementById("addMsg").addEventListener("click", function () {
  const message = inputValueById("msg");
  setItemToLocalStorage("message", message);
});

//  msg delete btn

document.getElementById("deleteMsg").addEventListener("click", function () {
  localStorage.removeItem("message");
});

// clear btn

document.getElementById("clear").addEventListener("click", function () {
  localStorage.clear();
});

const GetInformation = () => {
  const informationString = localStorage.getItem("information");
  let information = {};
  if (informationString) {
    information = JSON.parse(informationString);
  }
  return information;
};

document.getElementById("send").addEventListener("click", function () {
  const information = GetInformation();
  console.log(information);
  const name = inputValueById("name");
  const email = inputValueById("email");
  const message = inputValueById("msg");
  information["name"] = name;
  information["email"] = email;
  information["message"] = message;
  localStorage.setItem("information", JSON.stringify(information));
  displayOnUi();
});

const setValueToUi = (id, text) => {
  const inputField = document.getElementById(id);
  inputField.value = text;
};

const displayOnUi = () => {
  const information = JSON.parse(localStorage.getItem("information"));
  console.log(information);
  let valuee = [];
  for (const item in information) {
    valuee.push(information[item]);
  }
  const [name, email, message] = valuee;
  setValueToUi("name", name);
  setValueToUi("email", email);
  setValueToUi("msg", message);
};
displayOnUi();
