import renderGame from '../products/render-game.js';

const test = QUnit.test;

test('Testing render-game', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const pokemonEmerald = {
        id: 'pokemonEmerald',
        name: 'Pokemon Emerald',
        image: 'pokemonEmerald.jpg',
        description: 'A classic pokemon game',
        category: 'GBA',
        price: 5.00,
    };

    const expected = '<li class="GBA" title="A classic pokemon game"><h3>Pokemon Emerald</h3><img src="../assets/pokemonEmerald.jpg" alt="Pokemon Emerald image"><p class="price">$5.00<button id="pokemonEmerald" value="pokemonEmerald">Add</button></p></li>';

    //Act 
    // Call the function you're testing and set the result to a const
    const el = renderGame(pokemonEmerald);
    const text = el.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(text, expected);
});
