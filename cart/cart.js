import { renderLine } from './render-line-item.js';
import cart from '../data/cart.js';
import games from '../data/games.js';
import { findById, calcGrandTotal, addDollar } from '../common/utils.js';


const tbody = document.querySelector('tbody');
const grandTotal = document.getElementById('grand-total');

// go through the cart
for (let i = 0; i < cart.length; i++) {
    // for every item in the cart
    const cartItem = cart[i];
    // get the fruit data from the fruit spreadsheet that goes with this cart item
    const fruit = findById(games, cartItem.id);
    // make a table row for it
    const dom = renderLine(cartItem, fruit);

    // then put the table row on the tbody
    tbody.appendChild(dom);
}

// make a total row line that has all the cart items added up
const orderTotal = calcGrandTotal(cart, games);
grandTotal.textContent = addDollar(orderTotal);