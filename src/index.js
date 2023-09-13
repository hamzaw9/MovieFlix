/*import './style.css';

const moviesURL = 'https://api.tvmaze.com/shows';

const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  console.log(result);
  return result;
};

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
    console.error('Error:', error);
  }
};

renderMovies();


function moviePopup () {
  const div = document.getElementById('homepage');

  div.forEach(movie => {
  `<section class="popup_container">
      <div class="popup_img ">
      <img src="${movie.image.medium}" alt="movieImg">
      </div>
      <h2 class="movieTitle">${movie.name}</h2>
      <ul>
        <li>
          <p class="movie_actor">Name: <span id="movie_actor">the rock</span> </p>
        </li>
        <li>
          <p class="movie_actor">Name: <span id="movie_actor">the rock</span> </p>
        </li>
        <li>
          <p class="movie_actor">Name: <span id="movie_actor">the rock</span> </p>
        </li>
      </ul>
      <h4>Comments: <span id="commentsCount"></span></h4>
     <article id="comments">

     </article>

     <h3>Add comments</h3>
     <form action="" id="form">
       <input id="name" type="text" name="name" placeholder="Your name"> <br>
       <textarea name="comments" id="movie_comments" cols="30" rows="10" placeholder="Your insights"></textarea><br>
       <button type="submit">Comment</button>
     </form>

    </section>`
    
  })


}
*/
import './style.css';

const moviesURL = 'https://api.tvmaze.com/shows';

const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  console.log(result);
  return result;
};

const homepage = document.querySelector('#homepage');
const popupContainer = document.querySelector('#popup-container'); // Add this line
const overlay = document.getElementById('overlay');

const renderMovies = async () => {
  homepage.innerHTML = '';

  try {
    const movies = await fetchData();

    movies.forEach((movie) => {
      homepage.innerHTML += `
      <div class="movie">
        <img src=${ movie.image.medium } class="movie-image" alt="Movie Poster">
        <div class="movie-info">
          <h4 class="movie-name">${ movie.name }</h4>
          <div class="movie-likes">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <p id="${ movie.id }" >Likes</p>
          </div>
        </div>
        <div class="button-container">
          <a id="${ movie.id }" href=${ movie.url } class="watch-button">Watch</a>
          <button id="${ movie.id }" class="comment-button">Comment</button>
        </div>
      </div>`;
    });

    // Add event listeners to comment buttons
    const commentButtons = document.querySelectorAll('.comment-button');
    commentButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        alert('Ive been clicked')
        const movieId = event.target.id; // Get the movie ID from the button
        const movie = movies.find((m) => m.id == movieId); // Find the corresponding movie
        showPopup(movie); // Call the showPopup function with the movie object
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
};

renderMovies();

// Function to show the popup
function showPopup (movie) {
  // Populate the popup with movie information
  popupContainer.innerHTML =
    `<section class="popup_container">
    <button class="close_button">&times;</button>
      <div class="popup_img">
      <img src="${movie.image.medium }" alt="movieImg">
      </div>
      <h2 class="movieTitle">${ movie.name }</h2>
      <article class="movieDescription">${movie.summary}</article>
      <h4>Comments: <span id="commentsCount"></span></h4>
     <article id="comments" class="comments_container">

     </article>

     <h3>Add comments</h3>
     <form action="" id="form">
       <input id="name" type="text" name="name" placeholder="Your name"> <br>
       <textarea name="comments" id="movie_comments" cols="30" rows="10" placeholder="Your insights"></textarea><br>
       <button class="add_comment" type="submit" id="${movie.id}"> Add Comment</button>
     </form>
    </section>`
  // Display the popup
  popupContainer.style.display = 'block';
  overlay.style.display = 'block'
}

// Add event listener to close the popup when clicking outside of it
document.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    popupContainer.style.display = 'none';
  }
});

// ...

// Function to hide the popup
function hidePopup () {
  popupContainer.style.display = 'none';
  overlay.style.display = 'none';
}

// Add event listener to close the popup when clicking the close button
const closeButtons = document.querySelectorAll('.close_button');
closeButtons.forEach((button) => {
  button.addEventListener('click', hidePopup);
});


// Add event listener to close the popup when clicking outside of it
document.addEventListener('click', (event) => {
  if (event.target === overlay) {
    hidePopup();
  }
});

