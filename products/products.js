import renderGame from './render-game.js';
import { getProducts } from '../product-entry-api.js';

// grab games from local storage
const games = getProducts();
// grab where I am going to put the list
const list = document.getElementById('games');

games.forEach(element => {
    const el = renderGame(element);
    list.appendChild(el);
});