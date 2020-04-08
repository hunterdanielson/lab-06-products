export function findById(passedarray, id) {
    // can't get forEach to work... not sure why
    // passedarray.forEach(item => {
    //     if (item.id === id) {
    //         return item;
    //     } else {
    //         return null;
    //     }
    // });
    for (let i = 0; i < passedarray.length; i++) {
        const item = passedarray[i];

        // check the id against item.id
        if (item.id === id) {
            return item;
            
        }
    }

    return null;
}

export function calcLineItem(quantity, price) {

    const total = rounding(quantity * price);
    return total;

}

function rounding(number) {
    return Math.round(number * 100) / 100;
}

export function addDollar(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;
    
    return readablePrice;
}

// need the id from both, quantity from cart, price from games
export function calcGrandTotal(cart, games) {
    // initialize value to 0
    let grandTotal = 0;
    // loop through the cart
    for (let i = 0; i < cart.length; i++) {
        // grab the item
        const lineItem = cart[i];
        // match the cart item to game item
        const game = findById(games, lineItem.id);
        // calculate the total for that line, game * quantity
        const lineTotal = calcLineItem(lineItem.quantity, game.price);
        // add that line total to the grand total
        grandTotal += lineTotal;
    }
    // only want 2 decimal places
    return rounding(grandTotal);
}