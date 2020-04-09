
export function getCart() {
    // grab the Cart from local storage if it exists
    let localCart = localStorage.getItem('Cart');

    // initialize empty variable
    let cart;

    // if the cart does exist in storage, 
    // set the variable cart equal to it in object form (not string form)
    if (localCart) {
        cart = JSON.parse(localCart);
    } else {
        // if it does not exist in local storage, set cart = to an empty cart
        cart = [];
    }
    return cart;
}

export function addToCart(cart) {
    
    // now that we have done the stuff needed, set localCart = to the string version of cart
    // needed in order to push to local storage
    let localCart = JSON.stringify(cart);
    // put the localCart in localStorage under the name "Cart"
    localStorage.setItem('Cart', localCart);

    // alert the user when something is added to the cart
    alert(`Items added to the cart.`);
}

export function clearCart(cart) {
    localStorage.removeItem('Cart');
    // alert that the order is placed
    // the true, 2 make it look nicer in the alert
    alert('Order placed: \n' + JSON.stringify(cart, true, 2));
    // redirect user to homepage
    window.location.replace('../index.html');
}