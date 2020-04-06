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

    li.appendChild(p);

    return li;
}

export default renderGame;