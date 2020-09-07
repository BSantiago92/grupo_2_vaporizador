const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
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
            let usersJson = fs.readFileSync(path.join(__dirname, '/../data/user.json'), 'utf-8');
            let users;
            if (usersJson == "") {
                users = [];
            } else {
                users = JSON.parse(usersJson);
            }
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if(bcrypt.compareSync(req.body.password, users[i].password)) {
                        let usuarioALogearse = users[i];
                        break;
                    }
                }
            }

            if (usuarioALogearse == undefined) {
                return res.render('login', {errors: [
                    {msg: 'credenciales invalidas'}
                ]});
            }

            req.session.usuarioALogearse = usuarioALogearse;

        } else {
            return res.render('login', {errors: errors.errors});
        }    
    },

    // register: (req, res) => {
    //     console.log(validationResult(req));
    //     res.render('register')
    // },

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
        

      
    },
}