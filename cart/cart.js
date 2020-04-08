import { renderLine } from './render-line-item.js';
import cart from '../data/cart.js';
import games from '../data/games.js';
import { findById, calcGrandTotal, addDollar } from '../common/utils.js';

// grab dom elements
const cartData = document.getElementById('cart');
const grandTotal = document.getElementById('grand-total');

// go through the cart
for (let i = 0; i < cart.length; i++) {
    // for every item in the cart
    const cartItem = cart[i];
    // get the data from games and match id
    const game = findById(games, cartItem.id);
    // make a table row for it
    const dom = renderLine(cartItem, game);

    // append data where I had specified in the dom
    cartData.appendChild(dom);
}

const orderTotal = calcGrandTotal(cart, games);
grandTotal.textContent = addDollar(orderTotal);