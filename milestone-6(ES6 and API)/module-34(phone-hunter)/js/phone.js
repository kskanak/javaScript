const showDevice = async (searchValue, deviceLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayDevice(data.data, deviceLimit);
  } catch (error) {
    console.log(error);
  }
};

//  -------------------------------------------------display device fucntion--------------------------
const displayDevice = (deviceArray, deviceLimit) => {
  console.log(deviceArray);
  // no device found msg set
  if (deviceArray.length === 0) {
    document.getElementById("noFoundMessage").classList.remove("hidden");
    // ---showing spinner-----
    document.getElementById("spinner").classList.add("hidden");
  } else {
    document.getElementById("noFoundMessage").classList.add("hidden");
  }
  // setting limit and adding showMore btn
  if (deviceLimit && deviceArray.length > 10) {
    deviceArray = deviceArray.slice(0, 10);
    document.getElementById("showMoreBtn").classList.remove("hidden");
  } else {
    document.getElementById("showMoreBtn").classList.add("hidden");
  }

  // ----------------------------------------------DeviceContainer--------------
  const deviceContainer = document.getElementById("deviceContainer");
  deviceContainer.textContent = "";

  // --------------------------------------------looping phoneArray----------------------------
  deviceArray.forEach((device) => {
    // -------------------------------------------destructuring phone Object--------------------
    const { brand, image, slug, phone_name } = device;

    const deviceDiv = document.createElement("div");
    deviceDiv.innerHTML = `
    
    <div class="card card-compact bg-base-100 shadow-xl border-2 border-green-200">
    <figure class= "mt-4">
      <img src="${image}" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${phone_name}</h2>
      <h2 class="card-title">${brand}</h2>
      
      <div class="card-actions ">
      <a href="#my-modal-2" class="btn bg-green-600 border-green-600" onclick = "showDetails('${slug}')">Details</a>
      </div>
    </div>
  </div>
    
    `;
    // --------------------------------------------appending device to container--------------------------------
    deviceContainer.appendChild(deviceDiv);
    // -------------------------------------------------showing spinner--------------------------------------
    document.getElementById("spinner").classList.add("hidden");
  });
};

//----------------------------------------------------- display details function---------------------------------------

const showDetails = async (deviceId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${deviceId}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data);
  } catch (error) {
    console.log(error);
  }
};

// display details function
const displayDetails = (deviceId) => {
  const { brand, image, mainFeatures, name, releaseDate } = deviceId;
  const { chipSet, displaySize, memory, sensors, storage } = mainFeatures;
  const [faceId, accelerometer, gyro, proximity, compass, barometer] = sensors;
  const detailsContainer = document.getElementById("details-contaier");
  const modalDiv = document.createElement("div");
  modalDiv.innerHTML = `
    <div class="modal mx-auto" id="my-modal-2">
    <div class="modal-box p-10">
    <figure class = 'flex justify-center pb-2'>
      <img src = "${image}"></img>
    </figure>
      <h3 class="font-bold text-lg">${name}</h3>
      <h3 class="font-bold text-lg">Brand : ${brand} </h3>
      <h3 class="font-bold text-lg">Release Date : ${releaseDate} </h3>

      <h3 class= "font-bold text-lg">Main Features :</h3>
          <ul class= 'list-disc'>
            <li>${chipSet ? chipSet : "N/a"}</li>
            <li>${displaySize ? displaySize : "N/a"}</li>
            <li>${memory ? memory : "N/a"}</li>
            <li>${storage ? storage : "N/a"}</li>
          </ul> 
        

      <h3 class= "font-bold text-lg">Sensors :</h3>
        <ul class= 'list-disc'>
          <li>${faceId ? faceId : "N/a"}</li>
          <li>${accelerometer ? accelerometer : "N/a"}</li>
          <li>${gyro ? gyro : "N/a"}</li>
          <li>${proximity ? proximity : "N/a"}</li>
          <li>${compass ? compass : "N/a"}</li>
          <li>${barometer ? barometer : "N/a"}</li>
        </ul> 
      
  
    
      <div class="modal-action">
        <a href="#" class="btn">Close</a>
      </div>
    </div>
    </div>
  
  `;
  detailsContainer.appendChild(modalDiv);
};

//  input field enter key event handler
document
  .getElementById("input-search")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchProcess(10);
    }
  });

// -----------------------common function -----------------------

const searchProcess = (deviceLimit) => {
  const inputField = document.getElementById("input-search");
  const inputValue = inputField.value;
  showDevice(inputValue, deviceLimit);

  // showing spinner
  document.getElementById("spinner").classList.remove("hidden");
};

//-------------------------------- setting search handler-----------------------------
document.getElementById("search-btn").addEventListener("click", function () {
  searchProcess(10);
});

document.getElementById("showMoreBtn").addEventListener("click", function () {
  searchProcess();
});
showDevice("i");
