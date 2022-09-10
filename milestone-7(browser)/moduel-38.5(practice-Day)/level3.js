const getInputvalue = (inputId) => {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteITemLocalStorage = (key) => {
  localStorage.removeItem(key);
};

//  name add btn
document.getElementById("addName").addEventListener("click", function () {
  const Name = getInputvalue("name");

  setToLocalStorage("Name", Name);
});

// name delete btn
document.getElementById("deleteName").addEventListener("click", function () {
  deleteITemLocalStorage("Name");
});

// email add btn
document.getElementById("addemail").addEventListener("click", function () {
  const email = getInputvalue("email");
  setToLocalStorage("email", email);
});

// email delete btn
document.getElementById("deleteEmail").addEventListener("click", function () {
  deleteITemLocalStorage("email");
});

// paragraphg add btn
document.getElementById("addMsg").addEventListener("click", function () {
  const message = getInputvalue("msg");
  setToLocalStorage("message", message);
});

// paragraph delete btn
document.getElementById("deleteMsg").addEventListener("click", function () {
  deleteITemLocalStorage("message");
});

// clear btn

document.getElementById("clear").addEventListener("click", function () {
  localStorage.clear();
});

const setAsObject = () => {
  const infoObjectString = localStorage.getItem("infoObject");
  let infoObject = {};

  if (infoObjectString) {
    infoObject = JSON.parse(infoObjectString);
  }
  return infoObject;
};

document.getElementById("send").addEventListener("click", function () {
  const infoObject = setAsObject();
  console.log(infoObject);
  const message = getInputvalue("msg");
  const email = getInputvalue("email");
  const Name = getInputvalue("name");
  infoObject["name"] = Name;
  infoObject["email"] = email;
  infoObject["message"] = message;

  localStorage.setItem("infoObject", JSON.stringify(infoObject));
});
