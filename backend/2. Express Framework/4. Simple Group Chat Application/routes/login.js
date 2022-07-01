const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));

//  when a get request is made to /login, as response a form is shown
//  when submit the form, the value of the username is stored in localstorage
//  we can't access local storage from nodejs directly

// after onsubmit executes, it makes a POST request to '/auth' and follow the root.js for further
router.get('/login',(req,res,next)=>{
    res.status(200).send(
    `
    <form onsubmit="localStorage.setItem('username',document.getElementById('username').value)"
    action='/auth' method = 'POST'>
    <input type='text' name='username' id='username' placeholder='username'>
    <input type='submit' name='submit' value='submit'></form>
    `)
})

// redirecting to '/'
router.post('/auth',(req,res,next)=>{
    res.redirect('/');
})
module.exports = router;

