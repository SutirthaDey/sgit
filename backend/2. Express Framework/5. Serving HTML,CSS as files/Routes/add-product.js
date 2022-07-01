const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));

router.get('/add-product',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname ,'../','views','add-product.html'));
})

router.post('/add-product',(req,res,next)=>{
    const {product} = req.body;
    console.log(product);
    res.redirect('/');
})


module.exports = router;