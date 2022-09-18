// feting json file
let detailsArray;
const showData = async () => {
  const url = "../data.json";
  try {
    const res = await fetch(url);
    const data = await res.json();
    detailsArray = data;
    showOnUi(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
showData();

// showing on ui
const showOnUi = (data) => {
  const googleItemContainer = document.getElementById("google-item-container");
  googleItemContainer.textContent = "";
  data.forEach((item) => {
    const { id, img, name, price } = item;
    const div = document.createElement("div");
    div.innerHTML = `
    
    <div class="card bg-base-100 shadow-2xl border-2 border-slate-300">
    <figure class= "h-96">
      <img src="${img}" alt="Shoes" class="p-4"/>
    </figure>
    <div class="card-body border-2">
      <div class="cardBody-header flex justify-between">
        <div class="card-title">
          <h2 class="card-title">${name}</h2>
        </div>
        <div class="reactions">
          <button onclick="wishlist('${id}')"><i id="wish-heart" class="fa-solid fa-heart" ></i></button>

          <button onclick="recycleIt('${id}')"
            ><i class="fa-solid fa-square-minus text-red-900" ></i
          ></button>
        </div>
      </div>
      <h2 class="text-2xl font-bold">Price :$ <span>${price}</span></h2>
      <div class="card-actions justify-around">
       
        <label onclick="showDetails('${id}')" for="my-modal" class="btn modal-button bg-sky-400">Details</label>
        <button onclick="buyNow('${id}')" class="btn bg-pink-400">
          Buy Now
        </button>
      </div>
    </div>
  </div>
    
    
    `;
    googleItemContainer.appendChild(div);
  });
};

//  show details through modal

const showDetails = (id) => {
  const itemDetails = detailsArray.find((item) => item.id === id);
  const { img, price, name, details } = itemDetails;
  const detailsContainer = document.getElementById("detailsContainer");
  detailsContainer.innerHTML = `
  <figure>
    <img src="${img}" alt="Shoes" class="p-4"/>
  </figure>
  <div class="card-title">
    <h2 class="card-title">${name}</h2>
  </div>
  <h2 class="text-2xl font-bold">Price :$ <span>${price}</span></h2>
  <p class="">Details :${details}</p>
  
  
  `;
};

let count = 0;
let initialPrice = 0;
let tax = 0;
let totalPrice = 0;

const buyNow = (id) => {
  const itemDetails = detailsArray.find((item) => item.id === id);
  console.log(itemDetails);

  const { img, price, name } = itemDetails;

  initialPrice = price + initialPrice;
  tax = tax + price * 0.1;
  totalPrice = tax + initialPrice;

  console.log(initialPrice, tax, totalPrice);
  const cartImageContainer = document.getElementById("cartImage-container");
  cartImageContainer.textContent = "";
  const div = document.getElementById("div");
  // div.innerHTML =
  count++;

  document.getElementById("badge_count").innerText = count;
  document.getElementById("cartItems").innerText = count;

  document.getElementById("itemPrice").innerText = initialPrice.toFixed(2);

  document.getElementById("itemTax").innerText = tax.toFixed(2);

  document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
};

// clear cut btn event
document.getElementById("clearCart").addEventListener("click", function () {
  document.getElementById("badge_count").innerText = "";
  document.getElementById("cartItems").innerText = "";
  document.getElementById("itemPrice").innerText = "";
  document.getElementById("itemTax").innerText = "";
  document.getElementById("totalPrice").innerText = "";
});

//  wishlist function

let wishlistArray = [];
const wishlist = async (id) => {
  const itemData = await showData();
  const wishedItem = itemData.find((item) => item.id === id);
  const indexx = wishlistArray.indexOf(wishedItem);
  console.log(indexxhb);
  if (indexx === -1) {
    wishlistArray.push(wishedItem);
    // document.getElementById("wish-heart").classList.add("text-red-800");
  } else {
    alert("already selected");
    return;
  }
  // display in wishlist
  const wishlistItemContainer = document.getElementById(
    "wishlist-item-container"
  );
  wishlistItemContainer.textContent = "";
  wishlistArray.forEach((item) => {
    const { id, img, name, price } = item;
    const div = document.createElement("div");
    div.innerHTML = `
      
      <div class="card bg-base-100 shadow-2xl border-2 border-slate-300">
      <figure class= "h-96">
      <img src="${img}" alt="Shoes" class="p-4"/>
      </figure>
      <div class="card-body border-2">
      <div class="cardBody-header flex justify-between">
        <div class="card-title">
        <h2 class="card-title">${name}</h2>
        </div>
        <div class="reactions">
        <span><i class="fa-solid fa-heart text-red-400"></i></span>
          <span
            ><i class="fa-solid fa-square-minus text-red-900"></i
          ></span>
        </div>
      </div>
      <h2 class="text-2xl font-bold">Price :$ <span>${price}</span></h2>
      <div class="card-actions justify-around">
      
      <label onclick="showDetails('${id}')" for="my-modal" class="btn modal-button bg-sky-400">Details</label>
        <button onclick="buyNow('${id}')" class="btn bg-pink-400">
          Buy Now
        </button>
        </div>
        </div>
        </div>
        
        
        `;
    wishlistItemContainer.appendChild(div);
  });
};
console.log(wishlistArray);

const hearr = document.getElementById("wish-heart");
console.log(hearr);
