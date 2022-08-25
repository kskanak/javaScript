let counter = 0;
document.getElementById("set-btn").addEventListener("click", function () {
  // input fiels set
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  // counter set
  counter++;
  //  creating new tr and appending
  const contentContainer = document.getElementById("content-container");
  const dataContainer = document.createElement("tr");
  dataContainer.innerHTML = `
  <th>${counter}</th>
  <td>${inputValue}</td>
  <td>
  <button  class="btn btn-danger delete-btn">Delete</button>
  <button  class="btn btn-primary edit-btn">Edit</button>
  </td>
  `;
  contentContainer.appendChild(dataContainer);
  inputField.value = "";
  // setting delete btn
  const deleteBtnCollection = document.getElementsByClassName("delete-btn");
  for (const deleteBtn of deleteBtnCollection) {
    deleteBtn.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
  // setting edit btn
  const editBtnCollection = document.getElementsByClassName("edit-btn");
  for (editBtn of editBtnCollection) {
    editBtn.addEventListener("click", function (event) {
      event.target.parentNode.previousElementSibling.style.textDecorationLine =
        "line-through";
    });
  }
  // setting clear btn
  document
    .getElementById("clean-btn")
    .addEventListener("click", function (event) {
      dataContainer.style.display = "none";
    });
});
