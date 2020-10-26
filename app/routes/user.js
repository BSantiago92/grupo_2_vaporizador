const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const validate = require('../validators/users');

const path = require('path');
const multer = require('multer');
const { check, validationResult, body } = require('express-validator');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../img'),
    filename: (req,file, callback) => {
        callback(null, '/images/user-' + Date.now() + path.extname(file.originalname))
    }
});

router.get('/login', controller.login);

router.post('/login', validate.loginForm, controller.processLogin);

router.get('/profile', controller.profile);

router.post('/logout', controller.logout);

router.get('/register', controller.register);

router.post('/register', validate.register,controller.registerUser);

module.exports = router;