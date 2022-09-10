const apiPIn = `cd25fceb744004877af224e4b2c5437a`;

// loading api

const loadWeather = async (search) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiPIn}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    console.log(error);
  }
};

const displayWeather = (weatherInfo) => {
  console.log(weatherInfo);
  const { main, name, coord, sys, weather, wind } = weatherInfo;
  const { temp, temp_max, temp_min, humidity } = main;
  const { sunrise, sunset, country } = sys;

  const clouds = weather[0].main;
  if (clouds === "Haze") {
    document.body.style.backgroundImage = "url(images/haze.jpg)";
  } else if (clouds === "Rain") {
    document.body.style.backgroundImage = "url(images/rain.jpg)";
  } else if (clouds === "Clouds") {
    document.body.style.backgroundImage = "url(images/cloudy.jpg)";
  } else if (clouds === "Clear") {
    document.body.style.backgroundImage = "url(images/clear.jpg)";
  }

  const { lat, lon } = coord;
  const { speed } = wind;

  // fetching container
  const weatherContainer = document.getElementById("weather-container");
  weatherContainer.innerHTML = `
  
  <section class="text-center title-section">
      <h2 id="cityName" class="text-2xl text-white font-semibold">${name} <span>( ${country} )</span</h2>

  </section>


  <section class="text-white sm:flex justify-around font-semibold">
      <h2 class="text-orange-300">Sunrise: ${sunrise}</span></h2>
      <h2 class="text-orange-500">Sunset: ${sunset}</h2>
  </section>


    <section
        class="report-section flex justify-around gap-8 mt-20 w-3/4 mx-auto"
      >
  
    <div
      class="temp-info text-white font-semibold  text-justify"
    >
      <h2>Temperature : ${temp} &deg;C</h2>
      <h2 class="my-5">Max-Temp : ${temp_max}</h2>
      <h2>Min-Temp : ${temp_min}</h2>
    </div>

  
    <div
      class="other-info text-white font-semibold text-justify"
    >
      <h2>Cloud : ${clouds}</h2>
      <h2 class="my-5">Humidity : ${humidity} %</h2>
      <h2>WindSpeed : ${speed} km/h</h2>
      <h2 class="my-5">
        Coordination
        <ul>
          <li>Lon :  ${lon}</li>
          <li>Lat :  ${lat}</li></li>
        </ul>
      </h2>
    </div>
  </section>
    
  
  `;
};

// searchf btn
document.getElementById("searchBtn").addEventListener("click", function () {
  const inputField = document.getElementById("input-search");
  const inputValue = inputField.value;
  loadWeather(inputValue);
});

document
  .getElementById("input-search")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const inputField = document.getElementById("input-search");
      const inputValue = inputField.value;
      inputField.value = "";
      loadWeather(inputValue);
    }
  });
loadWeather("dhaka");
