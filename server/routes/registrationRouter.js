const express = require('express');
const path = require('path');
const registrationController = require('../controllers/registrationController');

const router = express.Router();

// route to handle POST request to save users in db and redirect user to confirmation page
router.post('/',
  registrationController.saveUser,
  (req, res) => {
    console.log('registration router is being hit');
    res.redirect(201, '/confirmation');
  });

module.exports = router;
