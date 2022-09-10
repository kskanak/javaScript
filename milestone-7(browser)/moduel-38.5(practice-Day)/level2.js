document.getElementById("btn").addEventListener("click", function () {
  const textValue = document.getElementById("textField").innerText;
  const textNumber = parseInt(textValue);
  displayOnui(textNumber);
});

const displayOnui = (textValue) => {
  document.getElementById("textField").innerText = textValue + 1;
  localStorage.setItem("resutl", JSON.stringify(textValue + 1));
};
const getNumber = localStorage.getItem("resutl");
console.log(getNumber);
document.getElementById("textField").innerText = getNumber;
