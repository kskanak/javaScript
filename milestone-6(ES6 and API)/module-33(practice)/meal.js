const showMealItem = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealItem(data.meals))
    .catch((Error) => console.log(Error));
};

// function to display the menu item
const displayMealItem = (meanuArray) => {
  // menu container
  const menuCardContainer = document.getElementById("menuCard-container");
  menuCardContainer.textContent = "";
  // menuCardContainer.textContent = '';
  meanuArray.forEach((meal) => {
    const carddiv = document.createElement("div");
    carddiv.classList.add("col");
    // adding inner HTML
    carddiv.innerHTML = `
    <div class="card h-100" onclick = "showDetails(${meal.idMeal})">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">
         ${meal.strInstructions.slice(0, 200)}
        </p>
      </div>
    </div>
    `;
    menuCardContainer.appendChild(carddiv);
  });
};

const showDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMealDetails(data.meals[0]));
};

const showMealDetails = (details) => {
  console.log(details);
  const detailSection = document.getElementById("details-section");
  detailSection.textContent = "";
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("row");
  detailsDiv.innerHTML = `
         
      <div class="col-md-5">
        <img src="${details.strMealThumb}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title">Meal Name : ${details.strMeal}</h5>
          <h5 class="card-title">Meal-origin : ${details.strArea}</h5>
          <h5 class="card-title">Catagory : ${details.strCategory}</h5>
          <h5 >Tags : ${details.strTags}</h5>
          <p class="card-text">
            Recipe Link : <a href="${details.strYoutube}" target= "_blank">${details.strYoutube}</a>
          </p>
          <p class="card-text">
            Thank You For visiting
          </p>
        </div>
      </div> 
          
  
  `;
  detailSection.appendChild(detailsDiv);
};
document.getElementById("search-btn").addEventListener("click", function () {
  //  getting value from input search field
  const inputSearch = document.getElementById("input-search");
  const inputValue = inputSearch.value;
  showMealItem(inputValue);
});
showMealItem("");
