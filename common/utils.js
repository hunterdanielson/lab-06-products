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

export function calcGrandTotal(cart, games) {
    let grandTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const game = findById(games, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, game.price);
        grandTotal += lineTotal;
    }
    return rounding(grandTotal);
}