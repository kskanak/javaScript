function userInfo() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayInfo(data));
}

function displayInfo(data) {
  data.map((data) => {
    const userContainer = document.getElementById("info-container");
    const li = document.createElement("li");
    li.innerText = data.name;
    userContainer.appendChild(li);
  });
}
