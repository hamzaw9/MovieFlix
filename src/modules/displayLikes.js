import { fetchLikes } from "./fetchLikes";
import { postLikes } from "./postLikes.js";

const homepage = document.querySelector("#homepage");

export const displayLikes = async (movieID) => {
  fetchLikes().then((result) => {
    const likesResult = result.find((item) => item.item_id === movieID);

    let likesCount = 0;
    if (likesResult) {
      likesCount = likesResult.likes;
    }
    const likesHolder = document.getElementById(`likes-count-${movieID}`);
    likesHolder.textContent = `${likesCount} Likes`;
  });
};

const handleLikeBtn = () => {
  homepage.addEventListener("click", async (event) => {
    if (event.target.classList.contains("like-icon")) {
      const parentID = parseInt(event.target.parentElement.id, 10);
      await postLikes(parentID);
      await displayLikes(parentID);
    }
  });
};

handleLikeBtn();
