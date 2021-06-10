const express = require('express');

const reportController = require('../controllers/reportController');

const router = express.Router();

router.get('/',
  reportController.getReport,
  (req, res) => {
    res.status(200).json(res.locals.allUsers);
  });

module.exports = router;
