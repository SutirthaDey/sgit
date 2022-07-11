const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {

  // getting products using sequelize
  Product.findAll()
  .then((products)=>{
    res.render('shop/product-list', {
          prods: products,
          pageTitle: 'All Products',
          path: '/products'
        });
  })
  .catch((err)=> console.log(err));
};


exports.getProductDetails = (req,res,next)=>{
  const prodId = req.params.productId;

  // sequelize uses findByPk to find elements by Id in database
  // returns a single element
  Product.findByPk(prodId)
  .then((product)=>{
    res.render('shop/product-detail', {
      product: product,
      pageTitle: 'Product',
      path: `/products`
    });
  })
  .catch((err)=>console.log(err));

  // we could have used findAll({where: {id:prodId}})
  // it does the same just returns an array of elements
}

// sequelize uses findAll to return all data from database
exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then((products)=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch((err)=> console.log(err));
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
