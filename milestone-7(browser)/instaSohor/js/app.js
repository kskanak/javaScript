const loadData = async () => {
  const url =
    "https://raw.githubusercontent.com/ProgrammingHero1/insta-shohor/main/data/posts.json";
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

loadData();
