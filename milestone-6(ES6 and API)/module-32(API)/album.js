function userAlbum() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => displayAlbum(data));
}

function displayAlbum(data) {
  const albumSection = document.getElementById("album-section");
  for (const album of data) {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album-div");
    albumDiv.innerHTML = `
    <span>User-Id: ${album.userId}</span>
        <span>serial: ${album.id} </span>
        <h3>Title:${album.title}</h3>
    
    `;
    albumSection.appendChild(albumDiv);
  }
}

userAlbum();
