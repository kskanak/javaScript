function showPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
function displayPost(data) {
  const postContainer = document.getElementById("post-container");

  for (const post of data) {
    console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList.add("styte");
    postDiv.innerHTML = `
    <h3>user Id : ${post.userId} </h3>
    <h3>Id No : ${post.id}</h3>
    <h2>Title: ${post.title}</h2>
    <p>Detail:${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}
showPost();
