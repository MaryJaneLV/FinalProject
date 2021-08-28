const express = require('express');
const router = express.Router();

// include controllers
const UserCtrl = require('../controllers/UserController');
const PostCtrl = require('../controllers/PostController');
const AuthCtrl = require('../controllers/AuthController');



// define paths to controllers

router.use('/user', UserCtrl);
router.use('/post', PostCtrl);
router.use('/auth', AuthCtrl);


// fallback to error message

router.use("*", (req, res) => {
    res.status(404);
    res.json({
      error: "unknown route",
    });
  });

module.exports = router;