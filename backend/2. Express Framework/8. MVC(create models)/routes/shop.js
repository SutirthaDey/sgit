const productController = require('../controller/products')

const express = require('express');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
