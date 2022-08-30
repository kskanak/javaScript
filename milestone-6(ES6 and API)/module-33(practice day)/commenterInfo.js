const showOnSearch = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayComment(data));
};

const displayComment = (arraOfData) => {
  console.log(arraOfData);
  const commentContainer = document.getElementById("comment-container");

  arraOfData.forEach((comment) => {
    console.log(comment);
    const { id, body, postId } = comment;
    console.log(id, body, postId);
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
     <h4>Id: ${id}</h4>
     <p>Comment : ${body}</p>
     <button class="btn btn-danger" onclick="showDetails(${postId})">Details</button>
    `;
    commentContainer.appendChild(commentDiv);
  });
};
const showDetails = (postId) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetail(data));
};
const displayDetail = (data) => {
  const { title, body } = data;
};
showOnSearch();
