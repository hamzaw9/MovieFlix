import fetchData from './fetchData.js';

const itemCount = () => {
  const items = document.getElementById('items');
  fetchData().then((result) => {
    items.textContent = result.length;
  });
};

export default itemCount;
