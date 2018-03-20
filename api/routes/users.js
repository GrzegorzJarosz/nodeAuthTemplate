const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const checkAuth = require('../authMiddleware/check-auth');

const User = require('../models/user');

const UserController = require('../controllers/usersController');

/*------------------------------------------------------------------*/

router.post('/signup', UserController.user_signup);

/*------------------------------------------------------------------*/

router.post('/login', UserController.user_login);
/*------------------------------------------------------------------*/

router.get('/profile', checkAuth, (req, res, next) => {
  res.status(200).json({msg: 'success!!'});
});

/*------------------------------------------------------------------*/

router.delete('/:userId', UserController.user_delete);

/*------------------------------------------------------------------*/

module.exports = router;
