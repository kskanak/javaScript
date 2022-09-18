// const images = [
//   "images/pic-1.jpg",
//   "images/pic-2.jpg",
//   "images/pic-3.jpg",
//   "images/pic-4.jpg",
//   "images/pic-5.jpg",
//   "images/pic-6.jpg",
//   "images/pic-7.jpg",
// ];

// let imgTimer = 0;
// const imgslider = document.getElementById("custom_carousel");
// setInterval(() => {
//   if (imgTimer === images.length) {
//     imgTimer = 0;
//   }
//   const imgLink = images[imgTimer];
//   imgTimer++;
//   imgslider.setAttribute("src", imgLink);
// }, 1000);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "eb5ba701b5mshd4f8f55fe75fdcap1050a4jsn2d0e792c093e",
    "X-RapidAPI-Host": "dark-sky.p.rapidapi.com",
  },
};

fetch(
  "https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
