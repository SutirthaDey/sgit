const express = require('express');
const bodyParser = require('body-parser');

// creates a router which is works like app
const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));

// getting the add-product page and sending the form response
// .status() method will set the response code of the response

router.get('/add-product',(req,res,next)=>{
    console.log('In add-product page!');
    res.status(200).send(`<form action="/product" method='POST'><input type="text" name="title" placeholder='product'><br>
    <input type='number' name='size' placeholder='size'><input type="submit" value="send"></form>`)
})

// sending the post request to the /product page
// whenever the send is clicked in add-product page, a form submission will be triggered in the 
// page of request type 'POST', so this route will be executed

router.post('/product',(req,res,next)=>{
    const {title,size} = req.body;
    console.log(title,size);
    res.redirect('/');
})

module.exports = router;