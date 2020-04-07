import { findById, calcLineItem } from '../common/utils.js';

const test = QUnit.test;

test('Testing util findById', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testArray = [{
        id: 'pokemonEmerald',
        name: 'Pokemon Emerald',
        image: 'pokemonEmerald.jpg',
        description: 'A classic pokemon game',
        category: 'GBA',
        price: 5.00,
    }, {
        id: 'zeldaMinishCap',
        name: 'The Legend of Zelda: The Minish Cap',
        image: 'zeldaMinish.jpg',
        description: 'Zelda game where link is shrunk down to minature size',
        category: 'GBA',
        price: 4.00,
    }, {
        id: 'zeldaBreath',
        name: 'The Legend of Zelda: Breath of the Wild',
        image: 'zeldaBreath.jpeg',
        description: 'Best selling zelda game, staple of any switch',
        category: 'switch',
        price: 45.00,
    }];

    const expected = 'The Legend of Zelda: The Minish Cap';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(testArray, 'zeldaMinishCap');
   

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.name, expected);
});
test('Testing util calcLineItem', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const testAmount = 10;
    const testQuantity = 3;
    const expected = 30;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineItem(testAmount, testQuantity);
   

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});