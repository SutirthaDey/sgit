const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
);

module.exports = class Cart{
    static addToCart(prodId,prodPrice,productSize){
        fs.readFile(p,(err,fileContent)=>{
            // This is the total cart
            let cart = {products:[],totalPrice:0};

            if(!err)
                cart = JSON.parse(fileContent);

            // checking if the element already exists in cart
            // if the id and size both matches means it is already existing 
            const existingProductIndex = cart.products.findIndex(p => p.id === prodId && p.size === productSize);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            // if the product does not exists then create an object with id, size and qty
            // add the new product to cart.products
            if(!existingProduct){
                updatedProduct = {id: prodId, size: productSize, qty:1};
                cart.products = [...cart.products,updatedProduct];
            }else{
                // store the existing object in a new object
                // increment the qty
                // replace the existing product with updatedProduct
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products[existingProductIndex] = updatedProduct;
            }

            // increment the cart price
            cart.totalPrice = cart.totalPrice + +prodPrice;

            // write cart data into the file
            fs.writeFile(p,JSON.stringify(cart),(err)=>{
                console.log(err);
            })
        })
    }
};