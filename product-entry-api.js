import games from './data/games.js';

export function getProducts() {
    // grab the Products from local storage if it exists
    let localProducts = localStorage.getItem('Products');

    // initialize empty variable
    let products;

    // if the products do exist in storage, 
    // set the variable products equal to it in object form (not string form)
    if (localProducts) {
        products = JSON.parse(localProducts);
    } else {
        // if it does not exist in local storage, SEED products by setting = hard coded data
        products = games;
    }
    return products;
}

export function setProducts(productList) {
    const stringifyList = JSON.stringify(productList);
    localStorage.setItem('Products', stringifyList);
}

export function addProduct(product, productList) {
    // push new product onto the list
    productList.push(product);
    return productList;
}