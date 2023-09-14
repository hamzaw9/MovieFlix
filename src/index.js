import "./style.css";

/*---------**************       Fetching Data from API    ***************----------*/

const moviesURL = "https://api.tvmaze.com/shows";

const involvementURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const involvementApiKey = "KTd9w8KpncZIww7GFHXJ";

const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  return result;
};

/*---------**************       Popup    ***************----------*/

const homepage = document.querySelector("#homepage");
const popupContainer = document.querySelector("#popup-container");
const overlay = document.getElementById("overlay");

function closebuttonHandler() {
  popupContainer.style.display = "none";
}

function showPopup(movie) {
  // Populate the popup with movie information
  popupContainer.innerHTML = `<section class="popup_container">
    <button class="close_button" id="close_popup">&times;</button>
      <div class="popup_img">
      <img src="${movie.image.medium}" alt="movieImg">
      </div>
      <div class="popup-inner">
        <h2 class="movieTitle">${movie.name}</h2>
        <article class="movieDescription">${movie.summary}</article>
        <h4>Comments: <span id="comments-count"></span></h4>
      <div id="comments" class="comments_container">
      </div>
      <h3>Add comments</h3>
      <form id="form">
        <input id="name" type="text" name="name" placeholder="Your name"> <br>
        <textarea name="comments" id="movie_comments" cols="15" rows="5" placeholder="Your insights"></textarea><br>
        <button class="add-comment" id="${movie.id}">Add Comment</button>
      </form>
      </div>
      
    </section>`;
  // Display the popup
  popupContainer.style.display = "block";
  overlay.style.display = "block";

  const closeBtn = document.getElementById("close_popup");
  closeBtn.addEventListener("click", closebuttonHandler);
}

// close popup
document.addEventListener("click", (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = "none";
  }
});

/*---------**************       Render/Display Movies    ***************----------*/

const renderMovies = async () => {
  homepage.innerHTML = "";

  try {
    const movies = await fetchData();

    movies.forEach((movie) => {
      homepage.innerHTML += `
      <div class="movie">
        <img src=${movie.image.medium} class="movie-image" alt="Movie Poster">
        <div class="movie-info">
          <h4 class="movie-name">${movie.name}</h4>
          <div id="${movie.id}" class="movie-likes">
            <i class="fa fa-heart-o like-icon" aria-hidden="true"></i>
            <p id="likes-count-${movie.id}"></p>
          </div>
        </div>
        <div class="button-container">
          <a id="${movie.id}" target="_blank" href=${movie.url} class="watch-button">Watch</a>
          <button id="${movie.id}" class="comment-button">Comment</button>
        </div>
      </div>`;
      displayLikes(movie.id);
    });

    // Add event listeners to comment buttons
    const commentButtons = document.querySelectorAll(".comment-button");
    commentButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const movieId = event.target.id;
        const movie = movies.find((m) => m.id == movieId);
        showPopup(movie);
      });
    });
  } catch (error) {
    const message = document.getElementById("error_message");
    message.innerHTML = error;
  }
};

renderMovies();

/*---------**************      Likes    ***************----------*/

const likeURL = `${involvementURL}${involvementApiKey}/likes`;
const postLikes = async (movieID) => {
  await fetch(likeURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item_id: movieID }),
  });
};

const fetchLikes = async () => {
  const response = await fetch(likeURL);
  const result = await response.json();
  return result;
};

const displayLikes = async (movieID) => {
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
  (async () => {
    await renderMovies();
    const movies = document.querySelectorAll(".movie");
    movies.forEach((movie) => {
      const likeIcon = movie.querySelector(".like-icon");

      likeIcon.addEventListener("click", async (event) => {
        const parentID = parseInt(event.target.parentElement.id, 10);
        await postLikes(parentID);
        await displayLikes(parentID);
      });
    });
  })();
};

handleLikeBtn();

/*---------**************       Comments    ***************----------*/
