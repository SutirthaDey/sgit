const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');

const router = express.Router();

router.get('/contact-us',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','views','contact-us.html'));
})

router.post('/success',(req,res,next)=>{
    const {name,email} = req.body;
    console.log(name,email);
    res.status(200).sendFile(path.join(__dirname,'../','views','success.html'));
})

module.exports = router;