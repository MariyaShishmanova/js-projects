import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = store => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('input', () => {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter(product => product.name.toLowerCase().includes(value));
      display(newStore, getElement('.products-container'), true);
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, getElement('.products-container'), true);
    }
  });
};

export default setupSearch;
