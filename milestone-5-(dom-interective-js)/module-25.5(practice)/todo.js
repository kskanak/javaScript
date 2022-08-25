// adding event handler to add btn
let counter = 0;
document.getElementById("btn-add").addEventListener("click", function () {
  // taking value from input field
  const inputText = document.getElementById("input-text");
  const inputValue = inputText.value;
  // creating new tr
  counter++;
  const contentContainer = document.getElementById("content-container");
  const newTr = document.createElement("tr");
  newTr.innerHTML = `
  
    <th>${counter}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-danger fw-bold btn-delete">Delete</button>
    <button class="btn btn-success fw-bold btn-edit">Edit</button>
    </td>
  `;
  contentContainer.appendChild(newTr);
  inputText.value = "";
  // setting delete btn
  document;
  const deleteBtnCollection = document.getElementsByClassName("btn-delete");
  for (const deleteBtn of deleteBtnCollection) {
    deleteBtn.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
  // setting edit btn
  const allEditBtn = document.getElementsByClassName("btn-edit");
  for (editBtn of allEditBtn) {
    editBtn.addEventListener("click", function (event) {
      event.target.parentNode.previousElementSibling.style.textDecorationLine =
        "line-through";
    });
  }
  // setting clear all btn
  const clearBtn = document.getElementById("btn-clear");
  clearBtn.addEventListener("click", function () {
    newTr.style.display = "none";
  });
});
