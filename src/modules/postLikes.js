import { involvementURL, involvementApiKey } from './apiCollection.js';

const likeURL = `${involvementURL}${involvementApiKey}/likes`;
const postLikes = async (movieID) => {
  await fetch(likeURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: movieID }),
  });
};

export default postLikes;
