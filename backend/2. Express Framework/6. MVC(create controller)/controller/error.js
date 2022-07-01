exports.getError = (req,res,next)=>{
    res.render('404',{
        pageTitle: 'Page Not Found',
        path: ''
    })
}