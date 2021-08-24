const express = require('express');
const router = express.Router();

// include controllers
const UserCtrl = require('../controllers/UserController');


// define paths to controllers

router.use('/user', UserCtrl);

// fallback to error message

router.use("*", (req, res) => {
    res.status(404);
    res.json({
      error: "unknown route",
    });
  });

module.exports = router;