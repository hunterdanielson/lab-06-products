import { findById, addDollar } from '../common/utils.js';
import { getCart, addToCart } from '../cart-api.js';

function renderGame(game) {
    const li = document.createElement('li');
    li.className = game.category;
    li.title = game.description;

    const h3 = document.createElement('h3');
    h3.textContent = game.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + game.image;
    img.alt = game.name + ' image';
    li.appendChild(img);

    // create dropdown
    const select = document.createElement('select');
    select.id = 'select';

    // to get the value it is select.value
    li.appendChild(select);

    // loop through and add 100 options to the dropdown
    for (let i = 1; i < 100; i++) {
        const option = document.createElement('option');
        option.textContent = `${i}`;
        option.value = i;
        select.appendChild(option);
    }

    const p = document.createElement('p');
    p.className = 'price';

    const gamePrice = addDollar(game.price);
    p.textContent = gamePrice;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.id = game.id;
    button.value = game.id;
    p.appendChild(button);

    // lab 8: add event listener to buttons
    button.addEventListener('click', () => {

        let cart = getCart();

        // set the line item = to the item whose id was pushed
        let lineItem = findById(cart, game.id);

        // if no line item exists, make one
        if (!lineItem) {
            lineItem = {
                // set line item id to current game id
                id: game.id,
                // initialize quantity to selected value, since this if statement only happens if it doesn't exsist
                quantity: select.value,
            };
            // push the line item onto the cart
            cart.push(lineItem);
        }
        // after the if statement the line item should exist on the cart
        // if it exists on the cart, increment its value 
        else {
            lineItem.quantity += select.value;
        }

        addToCart(cart);


    });

    li.appendChild(p);

    return li;
}

export default renderGame;