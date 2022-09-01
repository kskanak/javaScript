const fetchPhotos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const res = await fetch(url);
  const data = await res.json();
  return data.slice(0, 10);
};

const displayPhotos = async () => {
  const data = await fetchPhotos();
  const cardContainer = document.getElementById("cardContainer");
  data.forEach((photo) => {
    const { albumId, id, thumbnailUrl, title, url } = photo;
    console.log(albumId, id, thumbnailUrl, title, url);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
    <div class="card h-100">
    <img src="${thumbnailUrl}" class="card-img-top" alt="..." onclick = "photoDetails(${id}, '${title}', '${url}', '${thumbnailUrl}')"/>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      
    </div>
  </div>

    `;
    cardContainer.appendChild(cardDiv);
  });
};

const photoDetails = (idd, title, url, thumbnailUrl) => {
  const detailsContainer = document.getElementById("details");
  detailsContainer.innerHTML = `
  <img src="${thumbnailUrl}" class="card-img-top"/>
  <h5 class="card-title">${title}</h5>
  <h5 class="card-title">${idd}</h5>
  <h5 class="card-title">${url}</h5>
  `;
};

document.getElementById("searchBtn").addEventListener("click", async () => {
  const inputFieldValue = document.getElementById("inputSearch").value;
  const data = await fetchPhotos();
  const searchContent = data.filter((n) => n.title.includes(inputFieldValue));
  console.log(searchContent);
});

displayPhotos();
