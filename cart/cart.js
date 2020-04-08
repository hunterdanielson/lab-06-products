import { renderLine } from './render-line-item.js';
import games from '../data/games.js';
import { findById, calcGrandTotal, addDollar } from '../common/utils.js';

// grab dom elements
const cartData = document.getElementById('cart');
const grandTotal = document.getElementById('grand-total');
const placeOrderButton = document.getElementById('place-order-button');

// grab cart from local storage
let localCart = localStorage.getItem('Cart');

// initialize cart 
let cart;

// if local cart exists put its data in cart variable in object format
if (localCart) {
    // convert localCart to object and put it in the cart variable
    cart = JSON.parse(localCart);
} else {
    // if cart is empty disable button
    placeOrderButton.disabled = true;
    // if it doesn't exist initialize to empty array
    cart = [];

}

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

placeOrderButton.addEventListener('click', () => {
    localStorage.removeItem('Cart');
    // alert that the order is placed
    // the true, 2 make it look nicer in the alert
    alert('Order placed: \n' + JSON.stringify(cart, true, 2));
    // redirect user to homepage
    window.location.replace('../index.html');
});