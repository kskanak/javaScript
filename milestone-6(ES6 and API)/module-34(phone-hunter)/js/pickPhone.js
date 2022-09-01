const fetchingPhoneData = async (searchValue, limit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, limit);
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------------------------display phone function
const displayPhone = (phoneArray, limit) => {
  // no phone found msg
  if (phoneArray.length === 0) {
    document.getElementById("noPhoneMessage").classList.remove("d-none");

    // spinner
    document.getElementById("spinner").classList.add("d-none");
  } else {
    document.getElementById("noPhoneMessage").classList.add("d-none");
  }

  // result found set
  document.getElementById("result").innerText = phoneArray.length;

  // --------------------------------------------------------showmoreBTn Condition------------------
  if (limit && phoneArray.length > 10) {
    phoneArray = phoneArray.slice(0, 10);
    document.getElementById("showmoreSection").classList.remove("d-none");
  } else {
    document.getElementById("showmoreSection").classList.add("d-none");
  }
  // result found set
  document.getElementById("result").innerText = phoneArray.length;
  //------------------------------------------------------ phone container--------------------------------------------------
  const phoneContainer = document.getElementById("phoneContainer");
  phoneContainer.textContent = "";

  //                                          looping array for single phone object
  phoneArray.forEach((phone) => {
    // destructuring phone object
    const { brand, image, phone_name, slug } = phone;

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
      <div class="card border-black border-4 shadow-lg h-100">
        <img src="${image}" class=" px-5 py-3 card-img-top" alt="..." />
        <div class="card-body px-5">
          <h4 class="card-title">${phone_name}</h4>
          <h5 class="card-title">${brand}</h5>
        </div>
      </div>
    
    `;
    phoneContainer.appendChild(cardDiv);

    // spinner
    document.getElementById("spinner").classList.add("d-none");
  });
};

// commons function for btn
const processBtnHandler = (limit) => {
  const inputField = document.getElementById("input-search");
  const inputValue = inputField.value;
  fetchingPhoneData(inputValue, limit);

  // spinner
  document.getElementById("spinner").classList.remove("d-none");
};

// adding input field enter key event
document
  .getElementById("input-search")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      processBtnHandler(7);
    }
  });

// adding event handler to search btn
document.getElementById("search-btn").addEventListener("click", function () {
  processBtnHandler(7);
});

// adding event handler to show more btn
document.getElementById("showMoreBtn").addEventListener("click", function () {
  processBtnHandler();
});
