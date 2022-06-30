const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('In the middleware!');
    next();  // Allows the request to keep continue to the next middlewares
})

app.use((req,res,next)=>{
    console.log('In another middleware!');
    res.send('<h1> hello to nodeJs </h1>');
})

app.listen(4000);
