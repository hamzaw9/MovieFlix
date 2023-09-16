import fetchData from './fetchData.js';
import showPopup from './popup.js';
import displayLikes from './displayLikes.js';
import itemCount from './itemCount.js';

const homepage = document.querySelector('#homepage');

const renderMovies = async () => {
  homepage.innerHTML = '';

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
      itemCount();
    });

    const commentButtons = document.querySelectorAll('.comment-button');
    commentButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const movieId = event.target.id;
        const movie = movies.find((m) => m.id == movieId);
        showPopup(movie);
      });
    });
  } catch (error) {
    const message = document.getElementById('error_message');
    message.innerHTML = error;
  }
};

export default renderMovies;
