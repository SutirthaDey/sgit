const express = require('express');
const bodyParser = require('body-parser');

// for handling cors errors
const cors = require('cors');
const app = express();

// importing sequelize from util/database
const sequelize = require('./util/database');
const UserRoutes = require('./Routes/user');
const errorController = require('./Controller/errorController');

// bodyParser.json for json responses
app.use(bodyParser.json({extended: false}))
app.use(cors());

app.use(UserRoutes);
app.use(errorController.getError)


// syncing sequelize with database
sequelize
.sync()
.then(()=>{
  app.listen(3000);
})
.catch(()=>{
    console.log(err);
})
