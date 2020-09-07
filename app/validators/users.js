const { check } = require('express-validator');

// Creamos una propiedad por cada formulario que queramos validar
module.exports = {
    loginForm: [
        check('email')
            .notEmpty().withMessage('Debes completar el campo de email').bail()
            .isEmail().withMessage('Debes ingresar un email válido'), 

        check('password')
            .notEmpty().withMessage('Contraseña inválida').bail()
    ]
}