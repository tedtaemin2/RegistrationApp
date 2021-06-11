const express = require('express');
const path = require('path');
const registrationController = require('../controllers/registrationController');

const router = express.Router();

router.post('/',
  registrationController.saveUser,
  (req, res) => {
    // res.redirect('/confirmation');

    res.status(200).send('success');
    // res.redirect('/confirmation');
    // res.sendFile(path.resolve(__dirname, '../../client/views/confirmation.html'));
    // res.redirect('localhost:3000/confirmation');
  });

module.exports = router;
