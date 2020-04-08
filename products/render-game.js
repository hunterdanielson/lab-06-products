import { findById } from '../common/utils.js';

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

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + game.price.toFixed(2);
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.id = game.id;
    button.value = game.id;
    p.appendChild(button);
    // lab 8: add event listener to buttons
    button.addEventListener('click', () => {
        // grab the Cart from local storage if it exists
        let localCart = localStorage.getItem('Cart');

        // initialize empty variable
        let cart;

        // if the cart does exist in storage, 
        // set the variable cart equal to it in object form (not string form)
        if (localCart) {
            cart = JSON.parse(localCart);
        } else {
            // if it does not exist in local storage, set cart = to an empty cart
            cart = [];
        }

        // set the line item = to the item whose id was pushed
        let lineItem = findById(cart, game.id);

        // if no line item exists, make one
        if (!lineItem) {
            lineItem = {
                // set line item id to current game id
                id: game.id,
                // initialize quantity to one, since this if statement only happens if it doesn't exsist
                quantity: 1,
            };
            // push the line item onto the cart
            cart.push(lineItem);
        }
        // after the if statement the line item should exist on the cart
        // if it exists on the cart, increment its value 
        else {
            lineItem.quantity++;
        }

        // now that we have done the stuff needed, set localCart = to the string version of cart
        // needed in order to push to local storage
        localCart = JSON.stringify(cart);
        // put the localCart in localStorage under the name "Cart"
        localStorage.setItem('Cart', localCart);

        // alert the user when something is added to the cart
        alert(`1 ${game.name} was added to the cart.`);

    });

    li.appendChild(p);

    return li;
}

export default renderGame;