const express = require('express');
const os = require('os');
const fs = require('fs');
const router = express.Router();


// when a GET request is made to '/' it returns a form as response
// This form has two input, one is message and another is hidden input
// Hidden input is taken to store the value of username from localStorage via onsubmit

router.get('/',(req,res,next)=>{
    res.status(200).send(
        `
        <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action='/' method = 'POST'>
        <input type='text' name='message' id='message' placeholder="message">
        <input type='hidden' name='username' id='username'>
        <input type='submit' name='submit' value='submit'></form>
    `)
})

// A POST request to '/' means we are making a POST request to '/' and also sending the 
// values of the username and message alongside

// appendFile is storing the messages corresponding to username
router.post('/',(req,res,next)=>{
 const {username,message} = req.body;
 
 fs.appendFile('chatMessages.txt',`"${username}":"${message}`+ os.EOL,(err)=>{
    if(err){
    console.log(err)
    }
 })

 // printing who sent the message
 console.log(`${username} sent ${message}`);

 res.redirect('/');
})


module.exports = router;