import { moviesURL } from './apiCollection.js';

const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  return result.slice(0, 32);
};

export default fetchData;
