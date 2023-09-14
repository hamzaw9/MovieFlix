import "./style.css";

/*---------**************       Fetching Data from API    ***************----------*/

const moviesURL = "https://api.tvmaze.com/shows";

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
      <form action="" id="form">
        <input id="name" type="text" name="name" placeholder="Your name"> <br>
        <textarea name="comments" id="movie_comments" cols="15" rows="5" placeholder="Your insights"></textarea><br>
        <button class="add_comment" type="submit" id="${movie.id}"> Add Comment</button>
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
          <div class="movie-likes">
            <i class="fa fa-heart-o like-icon" aria-hidden="true"></i>
            <p id="${movie.id}"><span class="display-likes"></span> Likes</p>
          </div>
        </div>
        <div class="button-container">
          <a id="${movie.id}" target="_blank" href=${movie.url} class="watch-button">Watch</a>
          <button id="${movie.id}" class="comment-button">Comment</button>
        </div>
      </div>`;
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
