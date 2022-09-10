document.getElementById("addBtn").addEventListener("click", function () {
  const inputField = document.getElementById("userInput");
  const inputValue = inputField.value;
  inputField.value = "";
  // displayingOnUi(inputValue);
  sentTolocalStorage(inputValue);
  setToUiFromLocalStorage();
});

// const displayingOnUi = (userValue) => {
//   const userInput = setToUiFromLocalStorage();
//   console.log(userInput);

//   const container = document.getElementById("list-container");
//   const li = document.createElement("li");
//   li.classList.add("py-2", "flex", "justify-between");
//   li.innerHTML = `

//     <div>${userInput} </div>

//     <div><button title="Clear All" class="mr-4" id="removeBtn">
//     <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
//   </button></div>
//   `;
//   container.appendChild(li);
// };

const sentTolocalStorage = (userInput) => {
  const Info = JSON.parse(localStorage.getItem("UserInfo"));
  if (!Info) {
    const userInfo = [
      {
        title: userInput,
        status: "completed",
      },
    ];
    localStorage.setItem("UserInfo", JSON.stringify(userInfo));
  } else {
    const userInfo = [
      ...Info,
      {
        title: userInput,
        status: "completed",
      },
    ];
    localStorage.setItem("UserInfo", JSON.stringify(userInfo));
  }
};

const setToUiFromLocalStorage = () => {
  const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
  console.log(userInfo);

  const container = document.getElementById("list-container");
  container.textContent = "";

  userInfo.forEach((information) => {
    const userInput = information["title"];
    const li = document.createElement("li");
    li.classList.add("py-2", "flex", "justify-between");
    li.innerHTML = `
    
      <div>${userInput} </div>
    
      <div><button title="Clear All" class="mr-4" id="removeBtn">
      <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
    </button></div>
    `;
    container.appendChild(li);
  });
};
setToUiFromLocalStorage();
