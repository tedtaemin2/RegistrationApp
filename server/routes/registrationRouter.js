const express = require('express');

const registrationController = require('../controllers/registrationController');

const router = express.Router();

// route to handle POST request to save users in db and redirect user to confirmation page
router.post('/',
  registrationController.saveUser,
  (req, res) => {
    res.redirect(201, '/confirmation');
  });

module.exports = router;
