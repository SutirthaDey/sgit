const path = require('path');

exports.getContactPage = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','views','contact-us.html'));
};

exports.showSuccessPage = (req,res,next)=>{
    const {name,email} = req.body;
    console.log(name,email);
    res.status(200).sendFile(path.join(__dirname,'../','views','success.html'));
};