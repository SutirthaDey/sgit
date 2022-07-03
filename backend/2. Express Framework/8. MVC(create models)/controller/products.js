const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
 });
};

exports.postAddProduct = (req, res, next) => {
    //creating newProduct in models
    const newProduct = new Product(req.body.title);

    //saving newProduct in models

    newProduct.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // getting all the products using fetchAll()
    Product.fetchAll((products)=>{
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
};