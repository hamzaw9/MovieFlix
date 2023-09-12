import "./style.css";

const moviesURL = "https://api.tvmaze.com/shows";

const fetchData = async () => {
  const response = await fetch(moviesURL);
  const result = await response.json();
  console.log(result);
  return result;
};
