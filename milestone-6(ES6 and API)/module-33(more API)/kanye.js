const fetchQuotes = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (data) => {
  console.log(data.quote);
  const allQuotes = document.getElementById("allQuotes");
  allQuotes.innerText = data.quote;
};
