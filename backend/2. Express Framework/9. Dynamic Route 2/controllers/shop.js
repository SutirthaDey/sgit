const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};


exports.getProductDetails = (req,res,next)=>{
  const prodId = req.params.productId;
  Product.fetchDetails(prodId,(products)=>{
    res.render('shop/product-detail', {
      product: products,
      pageTitle: 'Product',
      path: `/products`
    });
  });
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

// for adding the element to cart 
// (redirecting to '/' for now, will be modified)
exports.addToCart = (req,res,next)=>{
  const productId = req.body.productId;
  const productSize = req.body.size;
  
  Product.fetchDetails(productId,(product)=>{
    const price = product.price;
    Cart.addToCart(productId,price,productSize);
  })

  res.redirect('/');
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
