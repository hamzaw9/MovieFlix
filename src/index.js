import "./style.css";

const moviesURL = "https://api.tvmaze.com/shows";

const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  console.log(result);
  return result;
};

const homepage = document.querySelector("#homepage");

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
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        <p id="${movie.id}" >Likes</p>
        </div>
        
    </div>
    <div class="button-container">
        <a id="${movie.id}" href=${movie.url} class="watch-button">Watch</a>
        <button id="${movie.id}" class="comment-button">Comment</button>
    </div>
      </div>`;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

renderMovies();
