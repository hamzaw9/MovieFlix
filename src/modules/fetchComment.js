import { involvementURL, involvementApiKey } from './apiCollection.js';

const commentURL = `${involvementURL}${involvementApiKey}/comments`;

const fetchComments = async (id) => {
  const response = await fetch(`${commentURL}?item_id=${id}`);
  const result = await response.json();
  return result;
};

export default fetchComments;
