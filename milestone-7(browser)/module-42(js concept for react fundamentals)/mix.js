fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// async await

const asyncfn = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
