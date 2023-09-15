import { involvementURL, involvementApiKey } from './apiCollection.js';

const commentURL = `${involvementURL}${involvementApiKey}/comments`;

const postComments = async (ID, name, comment) => {
  await fetch(commentURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: ID,
      username: name,
      comment,
    }),
  });
};

export default postComments;
