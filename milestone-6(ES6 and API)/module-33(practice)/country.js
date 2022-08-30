const showCountryName = (search) => {
  // fetching country name API]
  const nameUrl = `https://restcountries.com/v3.1/name/${search}`;
  fetch(nameUrl)
    .then((res) => res.json())
    .then((data) => displayName(data))
    .catch((Error) => console.log(Error));
};
const displayName = (arrayOfName) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";

  arrayOfName.forEach((country) => {
    // making card div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");

    // giving inner html
    cardDiv.innerHTML = `
    <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">${country.name.common}</h5>
      <p class="card-text">
       Continents :  ${country.continents}
      </p>
    </div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "showdDetailsInfo('${country.cca3}')">
      Details
    </button>
  </div>
    
    `;
    cardContainer.appendChild(cardDiv);
  });
};
const showdDetailsInfo = (countryCode) => {
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  fetch(url)
    .then((res) => res.json())
    .then((countryDetails) => showCountryDetails(countryDetails[0]))
    .catch((Error) => console.log(Error));
};
const showCountryDetails = (detailInfo) => {
  const languageObject = detailInfo.languages;
  const language = Object.values(languageObject);

  const currencyObject = detailInfo.currencies;
  const currency = Object.values(currencyObject);
  const currencyNSymbol = Object.values(currency[0]);

  const modalBody = document.getElementById("Countrydetails-container");
  modalBody.textContent = "";
  // const detailsCard = document.createElement("div");
  // detailsCard.classList.add("card");
  modalBody.innerHTML = `
  <div class = "card">
    <img src="${detailInfo.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-text">Name : ${detailInfo.name.official}</h4>
      <h6 class="card-text"> Independent : ${detailInfo.independent}</h6>
      <h6 class="card-text">Capital : ${
        detailInfo.capital ? detailInfo.capital[0] : "No Capital"
      }</h6>
      <h6 class="card-text"> Language : ${language}</h6>
      <h6 class="card-text"> Region : ${detailInfo.region}</h6>
      <h6 class="card-text"> Population : ${detailInfo.population}</h6>
      <h6 class="card-text"> Currency : ${currencyNSymbol}</h6>
      <h6 class="card-text"> Un-Member : ${detailInfo.unMember}</h6>
      <h6 class="card-text"> Maps : <a href= "${
        detailInfo.maps.googleMaps
      }" target= "_blank">${detailInfo.maps.googleMaps}</a></h6>
    </div>
  </div>
  `;
};
document.getElementById("search-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-search");
  const inputValue = inputField.value;
  showCountryName(inputValue);
});

showCountryName("a");
