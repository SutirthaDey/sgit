const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Why body parser is used for?
// Answer: Body parser is used for parsing the information or data from request, like text,file,object
// so that it can be used. Body parser makes it easy to parse and get those informations.

app.use(bodyParser.urlencoded({extended:false}));

// add-products is called whenever any request is made at /add-products
app.use('/add-products',(req,res,next)=>{
    console.log('In add-products page!');
    res.send(`<form action="/product" method='POST'><input type="text" name="title" placeholder='product'><br>
              <input type='number' name='size' placeholder='size'><input type="submit" value="send"></form>`)
})

// when a post request is made on /product, this gets executed
app.post('/product',(req,res,next)=>{
    const {title,size} = req.body;
    console.log(title,size);
    res.redirect('/');
})

// This is the root
app.use('/',(req,res,next)=>{
    res.send(`<h1>This is root</h1>`)
})

app.listen(4000);