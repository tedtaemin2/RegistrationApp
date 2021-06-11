const express = require('express');

const registrationController = require('../controllers/registrationController');

const router = express.Router();

router.post('/',
  registrationController.saveUser,
  (req, res) => {
    // res.redirect('../../client/confirmation.html');
    // console.log('hit');
    res.render('..client/views/confirmation');
  });

module.exports = router;
