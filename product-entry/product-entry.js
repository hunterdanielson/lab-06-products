import { getProducts, addProduct, setProducts } from '../product-entry-api.js';

// grab from dom
const newProductForm = document.getElementById('add-new-product');

// attach event listener of submit to get the whole form instead of click
newProductForm.addEventListener('submit', (event) => {
    // to stop it from reloading the page on submission
    event.preventDefault();
    
    // getting form data
    const productFormData = new FormData(newProductForm);

    // making the form into an object
    const product = {
        id: productFormData.get('id'),
        name: productFormData.get('name'),
        image: productFormData.get('image'),
        description: productFormData.get('description'),
        category: productFormData.get('category'),
        price: productFormData.get('price')
    };


    // get the products list
    const productList = getProducts();
    // call add product funtion, passing current product and product list to add it to
    // needed to pass both of these to make TDD easier/possible
    const addedProductList = addProduct(product, productList);
    // set new product list in storage
    setProducts(addedProductList);

    // reset the form
    newProductForm.reset();

});
