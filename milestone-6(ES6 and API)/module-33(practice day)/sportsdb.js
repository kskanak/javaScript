const preloader = (document.getElementById("preloader").style.display = "none");

const loadPlayer = (searchValue) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayName(data.player));
};

const displayName = (playerArray) => {
  const playerContainer = document.getElementById("playerContainer");
  const preloader = (document.getElementById("preloader").style.display =
    "none");

  playerContainer.textContent = "";

  playerArray.forEach((player, index) => {
    // kdjflakdj

    // kdjflakdj

    const { strRender, strPlayer, strPosition, idPlayer } = player;
    const nameCardDiv = document.createElement("div");
    nameCardDiv.classList.add("col");
    nameCardDiv.innerHTML = `
        <div class="card h-100">
          <img src="${
            strRender ? strRender : "https://i.ibb.co/g9CSkZQ/image.png"
          }" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Name : ${strPlayer}</h5>
            <h5 class="card-title">Sports : ${strPosition}</h5>
           
          </div>
      
           <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "showDetails('${idPlayer}')">
            Launch demo modal
          </button>

         
        </div>
    
    `;

    playerContainer.appendChild(nameCardDiv);
    const resultField = document.getElementById("result");
    resultField.innerText = `Result : ${index + 1}`;
    resultField.style.display = "block";
  });
};

const showDetails = (playerId) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayDetails(data.players[0]);
    });
};

const displayDetails = (details) => {
  const {
    strDescriptionEN,
    strGender,
    strNationality,
    strPlayer,
    strThumb,
    strSport,
  } = details;
  const modalBody = document.getElementById("detailsContainer");
  modalBody.textContent = "";
  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
  <img src="${strThumb}" class="card-img-top" alt="...">
  <div class="card-body">
  <h3>Name : ${strPlayer}</h3>
  <h5> Sports : ${strSport}</h5>
  <h5>Gender : ${strGender}</h5>
  <h5>Nationality : ${strNationality}</h>
  <h5>Description : ${strDescriptionEN}</h5>
  </div>
  `;

  modalBody.appendChild(cardDiv);
};

document.getElementById("search btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-search");
  const inputValue = inputField.value;
  if (inputValue === "") {
    const foundPlayer = document.getElementById("titleChanged");
    foundPlayer.innerText = `Provide Books Name please`;
  } else {
    const preloader = (document.getElementById("preloader").style.display =
      "block");
    loadPlayer(inputValue);
    const foundPlayer = document.getElementById("titleChanged");
    foundPlayer.style.display = "block";
    foundPlayer.innerText = `Found Player`;
  }
});

loadPlayer("k");
