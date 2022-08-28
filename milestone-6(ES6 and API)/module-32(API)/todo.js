function toDoList() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayToDoList(data));
}

function displayToDoList(data) {
  const todoSection = document.getElementById("todo-section");

  for (const todo of data) {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoContainer.innerHTML = `
       <h4>User Id : 
       <span>${todo.userId},</span> 

       Serial No:  <span>${todo.id}</span>
       </h4>
        <h3>Task Name : <span>${todo.title}</span></h3>
        <h3>Completed: <span>${
          todo.completed === true ? "Complete" : "Working"
        }</span></h3>
   
   `;
    todoSection.appendChild(todoContainer);
  }
}
toDoList();
