import { postComments } from "./postComments.js";
import { fetchComments } from "./fetchComment.js";

const popupContainer = document.querySelector("#popup-container");

export const displayComments = async (id) => {
  const commentsContainer = document.getElementById("commentsContainer");
  commentsContainer.textContent = "";
  fetchComments(id).then((result) => {
    if (!Array.isArray(result)) {
      return;
    }
    result.forEach((e) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = `(${e.creation_date}) ${e.username}: ${e.comment}`;
      commentsContainer.appendChild(paragraph);
    });
  });
};

popupContainer.addEventListener("click", async (event) => {
  const userName = document.querySelector("#name").value;
  const userComment = document.querySelector("#movie_comments").value;
  if (event.target.classList.contains("add-comment")) {
    event.preventDefault();
    await postComments(event.target.id, userName, userComment);
    await fetchComments(event.target.id);
    displayComments(event.target.id);
    // commentCount(event.target.id);
    document.querySelector("#name").value = "";
    document.querySelector("#movie_comments").value = "";
  }
});
