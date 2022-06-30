const express = require('express');
const bodyParser = require('body-parser');

// routers are imported
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// using the adminRouter 
app.use(adminRouter);

// using the shopRouter
app.use(shopRouter);

// This is used if no suitable routes are found then
// showing the page not found
app.use((req,res,next)=>{
    res.status(404).send(`<h1>Page not found!</h1>`);
})

app.listen(4000);