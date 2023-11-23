import postComments from './postComments.js';
import fetchComments from './fetchComment.js';
import commentsCount from './commentsCount.js';

const popupContainer = document.querySelector('#popup-container');

const displayComments = async (id) => {
  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.textContent = '';
  fetchComments(id).then((result) => {
    if (!Array.isArray(result)) {
      return;
    }
    result.forEach((e) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = `(${e.creation_date}) ${e.username}: ${e.comment}`;
      commentsContainer.appendChild(paragraph);
    });
  });
};

popupContainer.addEventListener('click', async (event) => {
  const userName = document.querySelector('#name');
  const userComment = document.querySelector('#movie_comments');
  const commentError = document.getElementById('comment-error');

  if (event.target.classList.contains('add-comment')) {
    event.preventDefault();
    if (userName.value !== '' && userComment.value !== '') {
      await postComments(event.target.id, userName.value, userComment.value);
    } else {
      commentError.style.display = 'block';
    }
    await fetchComments(event.target.id);
    displayComments(event.target.id);
    commentsCount(event.target.id);

    userName.value = '';
    userComment.value = '';
  }
});

export default displayComments;
