const express = require('express');
const contactController = require('../controllers/contact-us');
const bodyParse = require('body-parser');

const router = express.Router();

router.get('/contact-us',contactController.getContactPage)

router.post('/success',contactController.showSuccessPage)

module.exports = router;