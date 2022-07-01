const express = require('express');
const loginRoute = require('./routes/login');
const rootRoute = require('./routes/root');
const app = express();

// routes form login page
app.use(loginRoute);

// routes after login, '/' page
app.use(rootRoute);

app.use((req,res,next)=>{
    res.status(404).send(`<h1>Page not found!</h1>`);
})

app.listen(4000);