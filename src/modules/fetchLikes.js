import { involvementURL, involvementApiKey } from './apiCollection.js';

const likeURL = `${involvementURL}${involvementApiKey}/likes`;

const fetchLikes = async () => {
  const response = await fetch(likeURL);
  const result = await response.json();
  return result;
};

export default fetchLikes;
