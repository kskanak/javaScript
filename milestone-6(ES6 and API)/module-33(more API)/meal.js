const loadMeal = (search) => {
  const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (mealArray) => {
  const mealCardSection = document.getElementById("mealCard-section");
  mealCardSection.innerHTML = "";
  mealArray.forEach((meal) => {
    console.log(meal);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
    <div class="card" onclick ="mealDetails(${meal.idMeal})">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
      <div class="h-75 px-5 py-3">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">
         Instruction: ${meal.strInstructions.slice(0, 100)}
        </p>
      </div>
    </div>
    
    `;
    mealCardSection.appendChild(cardDiv);
  });
};

document.getElementById("search-btn").addEventListener("click", function () {
  // getting value from search input
  const inputField = document.getElementById("search-input");
  const inputValue = inputField.value;
  loadMeal(inputValue);
  inputField.value = "";
});

// click detail information

const mealDetails = (mealId) => {
  const url = ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.meals));
};

const displayDetails = (mealDetail) => {
  const detailsContainer = document.getElementById("details-section");
  detailsContainer.textContent = "";
  mealDetail.forEach((meal) => {
    console.log(meal);
    const detailsdiv = document.createElement("div");

    detailsdiv.innerHTML = `
  <img src ="${meal.strMealThumb}"></img>
  <h3>Meal Name : ${meal.strMeal}</h3>
  <h3>Country Origin : ${meal.strArea}</h3>
  <h3>Meal Catagory : ${meal.strCategory}</h3>
  <h3>Meal videoLink : ${meal.strYoutube}</h3>
  <h3></h3>
  <h3></h3>

  `;
    detailsContainer.appendChild(detailsdiv);
  });
};

loadMeal("");
