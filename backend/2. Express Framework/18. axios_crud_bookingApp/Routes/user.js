const express = require('express');

// importing user controllers
const userController = require('../Controller/userController');
const errorController = require('../Controller/errorController');

const router = express.Router();

// get request for index
router.get('/',userController.getIndex);

// post request for inserting user
router.post('/insert', userController.postInsertUser);

// delete request for specific
router.delete('/delete/:id', userController.deleteUser);

// error page
router.use('',errorController.getError);

module.exports = router;