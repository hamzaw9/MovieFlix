import fetchComments from './fetchComment.js';

const commentsCount = async (id) => {
  const commentsCount = document.getElementById('commentsCount');
  fetchComments(id).then((result) => {
    if (!Array.isArray(result)) {
      commentsCount.textContent = 'No comments available';
      return;
    }
    commentsCount.textContent = result.length;
  });
};

export default commentsCount;
