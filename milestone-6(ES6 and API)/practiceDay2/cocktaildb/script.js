/// loading data api

const loadCocktailName = async (searchValue) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayCocktailName(data.drinks);
  } catch (error) {
    console.log(error);
  }
};

// displaying the name function
displayCocktailName = (cocktailNames) => {
  console.log(cocktailNames);

  //  warning msg
  if (cocktailNames === null) {
    document.getElementById("warning").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
    //  loading progress
  } else {
    document.getElementById("warning").classList.add("hidden");
  }
  const cocktailContainer = document.getElementById("cocktailContainer");
  cocktailContainer.textContent = "";

  // looping through
  cocktailNames.forEach((name) => {
    const { strDrink, strDrinkThumb, strAlcoholic, idDrink } = name;
    const div = document.createElement("div");
    div.innerHTML = `
    
    <div
    class="card card-compact w-96 bg-base-100 shadow-xl border-gray-700 border"
  >
    <figure>
      <img src="${strDrinkThumb}" alt="Shoes" />
    </figure>
    <div class="card-body h-44">
      <h2 class="card-title">${strDrink}  (${strAlcoholic})</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class=" justify-end">
      <label for="my-modal" class="btn bg-rose-800" onclick = "showDetails(${idDrink})">Details</label>
      </div>
    </div>
  </div>
    
    `;
    cocktailContainer.appendChild(div);
    document.getElementById("spinner").classList.add("hidden");
  });
};

// details fn

const showDetails = async (id) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.drinks);
  } catch (error) {
    console.log(error);
  }
};

const displayDetails = (details) => {
  console.log(details[0]);
  const {
    strDrink,
    strDrinkThumb,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strInstructions,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
  } = details[0];
  //  modal container
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `

  <figure class = "mt-10">
    <img src="${strDrinkThumb}" alt="Shoes" class= "rounded-t-lg"/>
  </figure>

    <div class= "mt-4">

      <ul class = "list-disc px-6">
        <li><h2 class="card-title">${strDrink} </h2> </li>
        <li> <h2 class="card-title"> Ingredients </h2></li>
            <ul class = "list-decimal px-10">
              <li> ${strIngredient1}-${strMeasure1}</li>
              <li> ${strIngredient2}-${strMeasure2}</li>
              <li> ${strIngredient3}-${strMeasure3}</li>
              <li> ${strIngredient4}-${strMeasure4}</li>
            </uL>
          <li> <h2 class ="card-title"> Instruction </h2>
          
           <p> ${strInstructions}</p>
           </li>
      </ul>
    </div>
 

  
  `;
};

// search implement common function
const searchImplement = () => {
  const inputValue = document.getElementById("search").value;
  if (inputValue === "") {
    alert("give name");
    return;
  }
  loadCocktailName(inputValue);
  //  loading progress
  document.getElementById("spinner").classList.remove("hidden");
};

// search btn implement
document.getElementById("searchBtn").addEventListener("click", function () {
  searchImplement();
});

// enter key event handler
document.getElementById("search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchImplement();
  }
});

loadCocktailName("as");
