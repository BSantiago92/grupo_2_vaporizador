const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

// imprime el codigo enciptado de mi password que lo tengo que guardar en la base de datos
console.log(bcrypt.hashSync('12345678', 10));

const { check, validationResult, body } = require('express-validator');
const user = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/user.json'), 'utf-8'));

const jsonTable = require('../dataBase/jsonTable');

const usersModel = jsonTable('user');


module.exports = {
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        
       

        
        if(errors.isEmpty()) {
                let user = usersModel.findByField('email', req.body.email);
                
                // si existe el usuario

                if (user) {

                    //si la contraseña es correcta
                    if(bcrypt.compareSync(req.body.password, user.password)) {
                        // lo guardo en la session
                        // delete user.password;

                        req.session.user = user;
                        // logeo al usuario

                        res.redirect('/');

                    } else {
                            res.render('login', {
                            errors: { password: { msg: 'La contraseña es incorrecta'} },
                            user: req.body
                        });
                    }
                }

            } else {
                res.render('login', {
                    errors: errors.mapped(),
                    user: req.body
                });
            }   
    },

    logout: (req,res) => {
        
        req.session.destroy();

        res.render('login');
    },

    register: (req, res) => {
        res.render('register');
    },
    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            // Micro desafío
            // 1. leer todos los grupos
            // 2. creo el grupo con los datos del formulario
            // 3. agrego el nuevo grupo a los existentes
            // 4. guardado el nuevo listado en el archivo JSON

            let user = req.body;

            let newId = usersModel.create(user);

            res.redirect('/index/index');
        } else {
            let users = usersModel.all();
            res.render('register', { 
                user, 
                errors: errors.mapped(), 
                user: req.body 
            });
        }
        

      
    }
}