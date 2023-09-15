import { displayComments } from "./displayComments";

const popupContainer = document.querySelector("#popup-container");
const overlay = document.getElementById("overlay");

const closebuttonHandler = () => {
  popupContainer.style.display = "none";
};

export const showPopup = (movie) => {
  // Populate the popup with movie information
  popupContainer.innerHTML = `<section class="popup_container">
    <button class="close_button" id="close_popup">&times;</button>
      <div class="popup_img">
      <img src="${movie.image.medium}" alt="movieImg">
      </div>
      <div class="popup-inner">
        <h2 class="movieTitle">${movie.name}</h2>
        <article class="movieDescription">${movie.summary}</article>
        <h4>Comments:  (<span class="comments-count" id="commentsCount"></span>)</h4>
      <div id="commentsContainer" class="comments_container">
      </div>
      <h3>Add comments</h3>
      <form id="form">
        <input id="name" type="text" name="name" placeholder="Your name" required> <br>
        <textarea name="comments" id="movie_comments" cols="15" rows="5" required placeholder="Your insights"></textarea><br>
        <button class="add-comment" id="${movie.id}">Add Comment</button>
      </form>
      </div>
      
    </section>`;
  // Display the popup
  popupContainer.style.display = "block";
  overlay.style.display = "block";

  const closeBtn = document.getElementById("close_popup");
  closeBtn.addEventListener("click", closebuttonHandler);

  displayComments(movie.id);
  // commentCount(movie.id);
  return popupContainer;
};

// close popup
document.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});
