const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const { check, validationResult, body } = require('express-validator');

router.get('/login', controller.login);

router.get('/register', controller.register);

router.get('/register', [ 
    check('nombre').isLength,
    check('apellido').isLength,
    check('email').isEmail(),
    check('password').isLength({min:8})
], controller.store);


module.exports = router;