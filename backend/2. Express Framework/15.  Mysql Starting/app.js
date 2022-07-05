const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//start the mysql server before starting server
const db = require('../util/database'); // require util

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products').
then(result=> console.log(result[0][0]))  // lines to be added for Mysql
.catch(err=> console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
