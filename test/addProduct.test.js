import { addProduct } from '../product-entry-api.js';

const test = QUnit.test;

test('Testing add product to list', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const pokemonRuby = {
        id: 'pokemonRuby',
        name: 'Pokemon Ruby',
        image: 'pokemonRuby.jpg',
        description: 'A classic pokemon game',
        category: 'GBA',
        price: 3.00,
    };

    let pokemonGames = [{
        id: 'pokemonEmerald',
        name: 'Pokemon Emerald',
        image: 'pokemonEmerald.jpg',
        description: 'A classic pokemon game',
        category: 'GBA',
        price: 5.00,
    }];

    const expected = [{
        id: 'pokemonEmerald',
        name: 'Pokemon Emerald',
        image: 'pokemonEmerald.jpg',
        description: 'A classic pokemon game',
        category: 'GBA',
        price: 5.00,
    }, {
        id: 'pokemonRuby',
        name: 'Pokemon Ruby',
        image: 'pokemonRuby.jpg',
        description: 'A classic pokemon game',
        category: 'GBA',
        price: 3.00,
    }];

   

    //Act 
    // Call the function you're testing and set the result to a const
    addProduct(pokemonRuby, pokemonGames);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(pokemonGames, expected);
});