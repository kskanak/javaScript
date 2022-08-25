// adding event to plus
let count = 0;
document.getElementById("plus-btn").addEventListener("click", function () {
  count++;
  const counter = document.getElementById("counter");
  counter.innerText = count;
});

// subtraction adding to minus
document.getElementById("minus-btn").addEventListener("click", function () {
  count--;
  const counter = document.getElementById("counter");
  counter.innerText = count;
});
