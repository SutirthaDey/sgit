// array to store the products
const products = [];
const fs = require('fs');
const os = require('os');

// This class will create product objects
module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    // class method to save each object
    save(){
        products.push(this);
    }

    //function to fetch all objects
    static fetchAll(){
        return products;
    }
}