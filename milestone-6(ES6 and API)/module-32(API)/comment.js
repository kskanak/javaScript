function commentAll() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
}

// display comments function
function displayComment(data) {
  const commentSection = document.getElementById("comment-section");
  for (const comment of data) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-div");
    commentDiv.innerHTML = `
    <span class= "id">Id : ${comment.id}</span>
    <span class= "id">User-Id : ${comment.postId}</span> <br />
    <span class ="id">User-Name :${comment.name}</span>
    <span class ="id">User-email : ${comment.email}</span>
    <p>Comment:${comment.body}</p>
    
    `;
    commentSection.appendChild(commentDiv);
  }
}

commentAll();
