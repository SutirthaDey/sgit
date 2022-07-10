const db = require('../util/database');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.id = Math.random().toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save(){
    return db.execute(
      'INSERT INTO products (title,price,imageUrl,description) VALUES (?, ?, ?, ?)',
      [this.title,this.price,this.imageUrl,this.description]
      );
  }

  static fetchAll() {
    return db.execute(`SELECT * FROM products`);
  }

  static fetchDetails(prodId){
    return db.execute('SELECT * FROM products where products.id= ?',[prodId]);
  }

  static updateProduct(updatedProduct){
  
  }

  static deleteProduct(productId){
    return db.execute('DELETE FROM products WHERE products.id=?',[productId]);
  }
};
