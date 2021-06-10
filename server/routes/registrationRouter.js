const express = require('express');

const registrationController = require('../controllers/registrationController');

const router = express.Router();

router.post('/',
  registrationController.saveUser,
  (req, res) => {
    // res.redirect('../../client/confirmation.html');
    res.redirect(200, 'http://google.com');
  });

module.exports = router;
