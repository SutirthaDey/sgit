const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.id = Math.random().toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchDetails(prodId,cb){
    getProductsFromFile((products =>{
       const productDetail = products.find((eachProduct)=> eachProduct.id === prodId);
       cb(productDetail);
    }));
  }

  static updateProduct(updatedProduct){
    getProductsFromFile((products)=>{
      const existingProductIndex = products.findIndex(p=> p.id === updatedProduct.id);
      products[existingProductIndex] = updatedProduct;

      fs.writeFile(p,JSON.stringify(products),(err)=>{
        console.log(err);
      })
    })
  }

  static deleteProduct(productId){
    getProductsFromFile((products)=>{
      const productList = products.filter((p)=> p.id !== productId)
      console.log(productList);
      
      fs.writeFile(p,JSON.stringify(productList),(err)=>{
        console.log(err);
      })
    })
  }
};
