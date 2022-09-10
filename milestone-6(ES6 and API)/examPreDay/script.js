const loadCountryFood = async (countryName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayCountryFood(data.meals, countryName);
  } catch (error) {
    console.log(error);
  }
};

// display food

const displayCountryFood = (allFood, countryName) => {
  if (Array.isArray(allFood) === false || allFood.length === 0) {
    document.getElementById("warningMsg").classList.remove("hidden");

    // spenniers
    document.getElementById("spinner").classList.add("hidden");

    // food typesection
    document.getElementById("foodtypeSection").classList.add("hidden");
  } else {
    document.getElementById("warningMsg").classList.add("hidden");

    // food typesection
    document.getElementById("foodtypeSection").classList.remove("hidden");
  }

  // ----------------------------------------fetching the food container-----------------------------------------

  const foodContainer = document.getElementById("foodContainer");
  foodContainer.textContent = "";

  // looping through arrow
  allFood.forEach((food) => {
    const { strMealThumb, strMeal, idMeal } = food;

    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
    
    <div
      class="card card-compact bg-base-100 shadow-xl border-slate-400 border-2"
    >
      <figure>
        <img src="${strMealThumb}" alt="Shoes" />
      </figure>
      <div class="card-body bg-sky-100 text-purple-900 font-semibold">
        <h2 class="card-title">${strMeal}</h2>
      
        <div class="card-actions justify-end">
        
          <label for="my-modal-3" class="btn modal-button bg-purple-800"  onclick = "showDetails('${idMeal}')"
          >Details</label
        >
        </div>

      </div>
    </div>
    
    `;
    foodContainer.appendChild(cardDiv);
    // spenniers
    document.getElementById("spinner").classList.add("hidden");

    //  -----------setting the country name and varity number-----------

    // country name set
    document.getElementById("foodType").innerText = `${
      countryName ? countryName : N / A
    }`.toUpperCase();

    //  setting varity
    document.getElementById("foodVairty").innerText = `${allFood.length}`;
  });
};

// --------------------------showDetails -------------------------------------

const showDetails = async (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

// --------------------------------- displayDetails-------------------

displayDetails = (data) => {
  const {
    strMealThumb,
    strMeal,
    strTags,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strInstructions,
  } = data;
  // modal begins
  const detailsBody = document.getElementById("modalBody");
  detailsBody.innerHTML = `
  
      <figure class = "mt-10">
        <h2 class="mb-3 text-center text-2xl font-semibold text-purple-700"> ${strMeal}</h2>
        <img src="${strMealThumb}" alt="Shoes" class = "rounded-t-xl"/>
      </figure>
      <div class ="details pl-5 my-10">
     
      <h2 class="card-title text-purple-700">Catagory: ${strTags}</h2>
      <h2 class="card-title text-purple-700">Ingridients:</h2>
        <small class= "text-sky-800">
        ${strIngredient1}-${strMeasure1}, ${strIngredient2}-${strMeasure2}, ${strIngredient3}-${strMeasure3}, ${
    data.strIngredient4 ? strIngredient4 : ""
  }-${data.strMeasure4 ? strMeasure4 : ""}, ${
    data.strIngredient5 ? strIngredient5 : ""
  }-${data.strMeasure5 ? strMeasure5 : ""}, ${
    data.strIngredient6 ? strIngredient6 : ""
  }-${data.strMeasure6 ? strMeasure6 : ""}, 
        ${data.strIngredient7 ? strIngredient7 : ""}-${
    data.strMeasure7 ? strMeasure7 : ""
  }, ${data.strIngredient8 ? strIngredient8 : ""}-${
    data.strMeasure8 ? strMeasure8 : ""
  }, ${data.strIngredient9 ? strIngredient9 : ""}-${
    data.strMeasure9 ? strMeasure9 : ""
  }, ${data.strIngredient10 ? strIngredient10 : ""}-${
    data.strMeasure10 ? strMeasure10 : ""
  }, ${data.strIngredient11 ? strIngredient11 : ""}-${
    data.strMeasure11 ? strMeasure11 : ""
  },
   ${data.strIngredient12 ? strIngredient12 : "aa"} ${
    data.strMeasure12 ? strMeasure12 : "aaa"
  }
        </small>
        <h2 class="card-title text-purple-700">Instruction:</h2>
        <small class= "text-sky-800">
          ${strInstructions}
        </small>
        <h2 class="card-title text-purple-700">Youtube-Video:
            <a href = "${strYoutube}" target = "_blank">${strMeal} Recipe..</a>
        </h2>
      </div>
  
  `;
};

// ------------------------------------------------commom search function----------------------
const searchImplement = () => {
  const inputValue = document.getElementById("search").value;
  document.getElementById("search").value = "";
  loadCountryFood(inputValue);

  // spenniers
  document.getElementById("spinner").classList.remove("hidden");
};

// ------------------------------------------------------search btn-------------------------------------
document.getElementById("searchBtn").addEventListener("click", function () {
  searchImplement();
});

//  ------------------------------------------enter key event handler---------------------------------
document.getElementById("search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchImplement();
  }
});

loadCountryFood("canadian");
