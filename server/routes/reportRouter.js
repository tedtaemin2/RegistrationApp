const express = require('express');

const reportController = require('../controllers/reportController');

const router = express.Router();

// request to get Admin Report
router.get('/',
  reportController.getReport,
  (req, res) => {
    res.status(200).json(res.locals.allUsers);
    // res.sendStatus(200);
  });

module.exports = router;
