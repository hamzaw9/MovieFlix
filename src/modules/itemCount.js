import { fetchData } from "./fetchData.js";

export const itemCount = () => {
  const items = document.getElementById("items");
  fetchData().then((result) => {
    items.textContent = result.length;
  });
};
