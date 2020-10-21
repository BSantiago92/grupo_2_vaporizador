const { user, category } = require("../database/models");
const bcrypt = require("bcryptjs");
const { check, body } = require('express-validator');

// Creamos una propiedad por cada formulario que queramos validar
module.exports = {
    loginForm: [
        check('email')
            .notEmpty().withMessage('Debes completar el campo de email').bail()
            .isEmail().withMessage('Debes ingresar un email válido'), 

        check('password')
            .notEmpty().withMessage('Contraseña inválida').bail()
    ],
    register: [
    	check('email')
            .notEmpty().withMessage('Debes completar el campo de email').bail()
            .isEmail().withMessage('Debes ingresar un email válido'), 

        check('password')
            .notEmpty().withMessage('Contraseña inválida').bail()
            .isLength({ min : 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),

     	check('first_name')
            .notEmpty().withMessage('Nombre invalido').bail(),       

        check('last_name')
            .notEmpty().withMessage('Apellido inválido').bail()   

    ]
}