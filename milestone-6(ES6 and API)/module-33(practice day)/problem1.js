document.getElementById("comment-btn").addEventListener("click", function () {
  // fetching data api comment
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
});

displayComment = (data) => {
  const commentContainer = document.getElementById("comment-container");
  data.forEach((comment) => {
    const { id, name, email, body } = comment;

    const commentDiv = document.createElement("div");
    commentDiv.classList.add(
      "border",
      "border-2",
      "bg-success",
      "text-white",
      "m-5",
      "rounded-4",
      "py-3"
    );
    commentDiv.innerHTML = `
    <h5>Id : ${id}</h5>
    <h4>Name: ${name}</h4>
    <h4>Email: ${email}</h4>
    <h4>Comment: ${body}</h4>
    `;
    commentContainer.appendChild(commentDiv);
  });
};
