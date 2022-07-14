const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const sequelize = require('./util/database');

// imported for associations
const Product = require('./models/product');
const User = require('./models/user');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// This middleware adding the user from db to the req object everytime any
// request is made and move to next()
app.use((req,res,next)=>{
    User.findByPk(1)
    .then((user)=>{
        req.user = user;
        next();
    })
    .catch((err)=> console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// added association between Product and User
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

// force: true added for force change and overwrite
// creating one dummy user 
sequelize
// .sync({ force: true })
.sync()
.then(()=> {
    return User.findByPk(1)
})
.then((user)=>{
    if(!user){
        return User.create({username: 'Max', email: 'test@test.com'});
    }

    return user;
})
.then((user)=>{
    console.log(user);
    app.listen(3000);
})
.catch((err)=>console.log(err))
