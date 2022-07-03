// array to store the products
const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

const readProducts = (callback)=>{
    fs.readFile(p,(err,data)=>{
        if(err)
         callback([]);
        else
         callback(JSON.parse(data));
    })
}

// This class will create product objects
module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    // class method to save each object
    save(){
        readProducts((products)=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
    }

    //function to fetch all objects
    static fetchAll(callback){
        readProducts(callback);
    }
}