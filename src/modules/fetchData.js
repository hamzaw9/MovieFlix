import { moviesURL } from './apiCollection.js';

const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  return result.slice(0, 40);
};

export default fetchData;
