import { findById, calcLineItem, calcGrandTotal } from '../common/utils.js';

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

test('Testing util calcGrandTotal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    // set them up similar to the objects/arrays I will be using
    const itemsCart = [{
        id: 'item1',
        quantity: 2
    }, {
        id: 'item2',
        quantity: 4
    }];
    
    const item1 = {
        id: 'item1',
        price: 3.00,
    };
    const item2 = {
        id: 'item2',
        price: 1.00,
    };

    const arrayOfObjects = [
        item1,
        item2
    ];


    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcGrandTotal(itemsCart, arrayOfObjects);
   

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});