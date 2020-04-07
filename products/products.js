import games from '../data/games.js';
import renderGame from './render-game.js';

// grab where I am going to put the list
const list = document.getElementById('games');

games.forEach(element => {
    const el = renderGame(element);
    list.appendChild(el);
});