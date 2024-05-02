import getElement from './getElement.js';
import showDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getElement('.search-form');
const input = getElement('[name="drink"]');

form.addEventListener('input', e => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  showDrinks(`${baseURL}${value}`);
});
