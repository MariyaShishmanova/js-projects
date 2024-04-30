import products from './products.js';

const container = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const buttonsContainer = document.querySelector('.companies');

let filteredProducts = [...products];

// text filter
form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter(product => {
    return product.title.toLocaleLowerCase().includes(inputValue);
  });
  displayProducts();
});

buttonsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('company-btn')) {
    searchInput.value = '';
    const id = e.target.dataset.id;
    if (id === 'all') {
      filteredProducts = [...products];
    } else {
      filterProducts(id);
    }
    displayProducts();
  }
});

function filterProducts(id) {
  filteredProducts = products.filter(product => {
    return product.company === id;
  });
}

function displayProducts() {
  if (filteredProducts.length < 1) {
    container.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  container.innerHTML = filteredProducts
    .map(({ id, title, price, image }) => {
      return ` <article class="product" data-id="${id}">
   <img src='${image}' alt="image" class="product-img img">

   <footer>
     <h5 class="product-name">${title}</h5>

     <span class="product-price">$${price}</span>
   </footer>
 </article>`;
    })
    .join('');
}

function displayButtons() {
  const buttons = ['all', ...new Set(products.map(product => product.company))];

  buttonsContainer.innerHTML = buttons
    .map(company => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join('');
}

displayProducts();
displayButtons();
