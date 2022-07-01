const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));


router.get('/',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname ,'../','views','shop.html'));
})


module.exports = router;