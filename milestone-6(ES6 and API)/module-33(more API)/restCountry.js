const countryInfo = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountryInfo(data));
};

const displayCountryInfo = (countries) => {
  const countrySection = document.getElementById("country-section");
  countries.forEach((country) => {
    const countrydiv = document.createElement("div");
    countrydiv.classList.add("countryDiv");
    countrydiv.innerHTML = `

    <h3>Country Name: ${country.name.common}</h3>
    <h4>Capital: ${country.capital ? country.capital[0] : "No Capital"}</h4>
    <button onclick ="countryDetails('${country.cca3}')">Details</button>
    
    `;
    countrySection.appendChild(countrydiv);
  });
};

const countryDetails = (countryCode) => {
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data));
};

const displayCountryDetails = (data) => {
  data.forEach((details) => {
    const countryDetails = document.getElementById("country-details");
    countryDetails.innerHTML = `
    <h4>Country Name: ${details.name.common}</h4>
    <img src="${details.flags.png}"></img>
    
    `;
  });
};
countryInfo();
