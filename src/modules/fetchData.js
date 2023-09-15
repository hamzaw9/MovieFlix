import { moviesURL } from "./apiCollection.js";

export const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  return result;
};
