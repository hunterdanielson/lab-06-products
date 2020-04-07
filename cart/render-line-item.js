
export function addDollar(price) {
    const readablePrice = `$${Number(price).toFixed(2)}`;
    
    return readablePrice;
}

export function renderLine(cartItem, product) {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = product.name;
    nameTd.classList.add('align-left');

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = addDollar(product.price);

    const totalTd = document.createElement('td');
    const totalPrice = cartItem.price * cartItem.quantity;
    totalTd.textContent = addDollar(totalPrice);
    totalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(quantityTd);
    tr.appendChild(priceTd);
    tr.appendChild(totalTd);

    return tr;
}