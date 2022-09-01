//  load phone arrow fucntion
const loadPHone = async (searchText, limit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayLoadPhone(data.data, limit);
};
//  --------------------------------------phone container-----------------------------------------------

// display loadphone arrow function
const displayLoadPhone = (allPhone, limit) => {
  const phoneContainer = document.getElementById("phoneContainer");
  phoneContainer.textContent = "";
  // setting no phone found warning
  if (allPhone.length === 0) {
    document.getElementById("noPhoneFound").classList.remove("d-none");

    // adding spinner loader
    document.getElementById("spinnerLoader").classList.add("d-none");
  } else {
    document.getElementById("noPhoneFound").classList.add("d-none");
  }

  if (limit && allPhone.length > 10) {
    // removing showmore btn
    document.getElementById("shomore").classList.remove("d-none");
    allPhone = allPhone.slice(0, 10);
  } else {
    // removing showmore btn
    document.getElementById("shomore").classList.add("d-none");
  }
  // looping through for single phone
  allPhone.forEach((phone) => {
    const { brand, image, phone_name, slug } = phone;

    // making div for card
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col", "border-2", "border-succes");

    // writing inner html
    phoneDiv.innerHTML = `
      
      <div class="card shadow-lg border-black border-5"  >
      <img src="${image}" class="card-img-top h-25 px-5 py-4" alt="${phone_name}"/>
      <div class="card-body px-5">
        <h4 class="card-title">${phone_name}</h4>
        <h6>${brand}</h6>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-success w-50 mx-auto my-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "showDetails('${slug}')">
        Details
      </button>
    </div>
      
      `;
    // appending phonbeDiv to parent div (phoneContainer)
    phoneContainer.appendChild(phoneDiv);
    // adding spinner loader
    document.getElementById("spinnerLoader").classList.add("d-none");
  });
};

//  showdetails function
const showDetails = async (slugNumber) => {
  const url = `https://openapi.programming-hero.com/api/phone/${slugNumber}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
};

const displayDetails = (mobileInfo) => {
  const detailsContainer = document.getElementById("detailsContainer");
  detailsContainer.textContent = "";
  console.log(mobileInfo);
  const { brand, image, mainFeatures, name, releaseDate } = mobileInfo;
  const { storage, displaySize, chipSet, memory, sensors } = mainFeatures;
  const [FaceID, accelerometer, gyro, proximity, compass, barometer] = sensors;

  // making details card div
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("card");
  detailsDiv.innerHTML = `
  
  <img src="${image}" class="card-img-top h-25 px-5 py-3" alt="...">
  <div class="card-body">
    <h4>Mobile Name : ${name}</h4>
    <h5>Brand : ${brand}</h5>
    <h5>Release-Date : ${releaseDate ? releaseDate : "N/A"}</h5>
    <ul>
      <li>Main-Featured: 
        <ul>
          <li>Storage : ${storage}</li>
          <li>Display-Size : ${displaySize}</li>
          <li>ChipSet : ${chipSet}</li>
          <li>Memory : ${memory}</li>
          <li>Storage : ${storage}</li>    
        </ul>

      </li>
    </ul>
      
    <ul>
      <li> Sensors :
          <ul>
              <li>Storage : ${FaceID}</li>
              <li>Display-Size : ${accelerometer}</li>
              <li>ChipSet : ${gyro}</li>
              <li>Memory : ${proximity}</li>
              <li>Storage : ${compass}</li>    
              <li>Storage : ${barometer}</li>    
          </ul>
      
      </li
    </ul>
     
  </div>
  
  `;
  detailsContainer.appendChild(detailsDiv);
};

// ---------------------------------------common  function-------------------------------
const showPhoneProcess = (limit) => {
  // adding spinner loader
  document.getElementById("spinnerLoader").classList.remove("d-none");
  // taking value from search field
  const searchField = document.getElementById("input-search");
  const searchValue = searchField.value;
  loadPHone(searchValue, limit);
};

// input field enter event handler
document
  .getElementById("input-search")
  .addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "Enter") {
      showPhoneProcess(10);
    }
  });

// addding event handler to search btn
document.getElementById("search-btn").addEventListener("click", function () {
  showPhoneProcess(10);
});

// show more btn
document.getElementById("showmore-btn").addEventListener("click", function () {
  showPhoneProcess();
});

loadPHone("i");
