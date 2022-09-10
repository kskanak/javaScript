document.getElementById("addBtn").addEventListener("click", function () {
  const userInput = document.getElementById("inputField").value;
  if (userInput === "") {
    alert("enter list");
    return;
  }
  document.getElementById("inputField").value = "";

  const todo = JSON.parse(localStorage.getItem("Todos"));
  if (!todo) {
    const todos = [
      {
        title: userInput,
        status: "completed",
      },
    ];
    localStorage.setItem("Todos", JSON.stringify(todos));
  } else {
    const todos = [
      ...todo,
      {
        title: userInput,
        status: "completed",
      },
    ];
    localStorage.setItem("Todos", JSON.stringify(todos));
  }
  render();
});

const render = () => {
  const todos = JSON.parse(localStorage.getItem("Todos"));

  const todoContainer = document.getElementById("list-container");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const { title } = todo;

    const li = document.createElement("li");
    li.classList.add("py-2", "flex", "justify-between");
    li.innerHTML = `<div>${title}</div> 
      
    <div>
    <button title="Clear All" class="text-center removeBtn">
    <i class="fa-solid fa-square-minus text-[30px] text-red-400" ></i>
     </button>
    </div>
    
    `;

    todoContainer.appendChild(li);
    const removeBtn = document.getElementsByClassName("removeBtn");
    removeBtn.innerHTML = "";
    for (const item of removeBtn) {
      item.addEventListener("click", function (e) {
        console.log(
          e.target.parentNode.parentNode.parentNode.parentNode.removeChild(li)
        );
      });
    }
  });
};

document.getElementById("deleteBtn").addEventListener("click", function () {
  localStorage.clear();
  render();
});

render();
