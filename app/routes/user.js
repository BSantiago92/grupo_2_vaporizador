const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validate = require('../validators/users');
const { check, validationResult, body } = require('express-validator');

router.get('/login', controller.login);

router.post('/login', validate.loginForm, controller.processLogin);

router.get('/profile', controller.profile);

router.post('/logout', controller.logout);

router.get('/register', controller.register);


module.exports = router;