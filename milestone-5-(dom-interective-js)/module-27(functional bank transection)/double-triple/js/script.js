// double the number set

document.getElementById("double-btn").addEventListener("click", function () {
  // getting value from inputfield
  const inputNumber = inputFieldValue("inputField");
  // doubling the number
  const double = inputNumber * 2;
  // getting value from element
  const elementValue = elementValueById("outputNumber");
  // setting the value
  const valueSet = setValue("outputNumber", double);
  console.log(typeof valueSet);
});

// tripple the number set

document.getElementById("tripple-btn").addEventListener("click", function () {
  // getting value from input field
  const inputNumber = inputFieldValue("inputField");
  // trippling the number
  const tripple = inputNumber * 3;
  // getting value from element
  //  settting the value
  const valueSet = setValue("outputNumber", tripple);
  console.log(valueSet, typeof valueSet);
});
