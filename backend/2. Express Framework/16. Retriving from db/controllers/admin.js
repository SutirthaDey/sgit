const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing: false
  });
};

exports.getEditProduct = (req,res,next) =>{
  const productId = req.params.productId;
  const editMode = req.query.edit;

  if(!editMode)
   return res.redirect('/');

  Product.fetchDetails(productId,(product)=>{
    res.render('admin/edit-product', {
      product: product,
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      formsCSS: true,
      editing: editMode
    });
  });
}

exports.postEditProduct = (req,res,next) =>{
  const updatedProduct = {...req.body};
  Product.updateProduct(updatedProduct);
  res.redirect('/');
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.
  save()
  .then(()=>{
    res.redirect('/');
  })
  .catch((err)=>console.log(err));

};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fieldData])=>{
    res.render('admin/products', {
      prods: rows,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
   })
   .catch(err=>console.log(err));
};

exports.getDeleteProduct = (req,res, next)=>{
  const productId = req.body.id;
  Product.deleteProduct(productId)
  .then(()=>{
    res.redirect('/admin/products');
  })
  .catch((err)=>console.log(err));
}