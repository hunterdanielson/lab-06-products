import renderGameRemove from './render-game-remove.js';
import { getProducts } from '../product-entry-api.js';

// grab games from local storage
const games = getProducts();
// grab where I am going to put the list
const list = document.getElementById('products-list');

games.forEach(element => {
    const el = renderGameRemove(element);
    list.appendChild(el);
});