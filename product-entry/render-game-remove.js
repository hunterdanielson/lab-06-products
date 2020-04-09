import { addDollar, findById } from '../common/utils.js';
import { getProducts, setProducts } from '../product-entry-api.js';

function renderGame(game) {
    const li = document.createElement('li');
    li.className = game.category;
    li.title = game.description;

    const h3 = document.createElement('h3');
    h3.textContent = game.name;
    li.appendChild(h3);

    const img = document.createElement('img');

    if (game.image.includes('http') || game.image.includes('base64')) {
        img.src = game.image;
    } else {
        img.src = '../assets/' + game.image;
    }

    img.alt = game.name + ' image';
    li.appendChild(img);


    const p = document.createElement('p');
    p.className = 'price';

    const gamePrice = addDollar(game.price);
    p.textContent = gamePrice;

    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.id = game.id;
    button.value = game.id;
    p.appendChild(button);

    // lab 8: add event listener to buttons
    button.addEventListener('click', () => {

        // get product list
        const productList = getProducts();
        // find the specific item button pushed
        let lineItem = findById(productList, game.id);
        // find its index in the local storage
        const index = productList.indexOf(lineItem);

        // if the index is on the local storage array, remove it
        if (index > -1) {
            productList.splice(index, 1);
        }

        setProducts(productList);
        location.reload();

    });

    li.appendChild(p);

    return li;
}

export default renderGame;