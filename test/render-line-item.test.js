
import { renderLine } from '../cart/render-line-item.js';

const test = QUnit.test;

test('Testing render-line-item', function(assert) {
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

    const itemInCart = {
        id: 'pokemonEmerald',
        quantity: 2,
        price: 5.00,
    };

    // eslint-disable-next-line no-useless-escape
    const expected = '<tr><td class=\"align-left\">Pokemon Emerald</td><td>2</td><td>$5.00</td><td class=\"line-item-total\">$10.00</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const el = renderLine(itemInCart, pokemonEmerald);
    const text = el.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(text, expected);
});