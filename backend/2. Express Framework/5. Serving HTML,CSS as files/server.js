const express = require('express');
const path  = require('path');
const addProductRoute = require('./Routes/add-product');
const shopRoute = require('./Routes/shop');
const contactUsRoute = require('./Routes/contact-us');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(addProductRoute);
app.use(shopRoute);
app.use(contactUsRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
})


app.listen(5000);