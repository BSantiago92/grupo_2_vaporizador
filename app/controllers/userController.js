const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
const user = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/user.json'), 'utf-8'));

const jsonTable = require('../dataBase/jsonTable');

const usersModel = jsonTable('user');
const categoriesModel = jsonTable('categories');


module.exports = {
    login: (req, res) => {
        res.render('login')
    },

    // register: (req, res) => {
    //     console.log(validationResult(req));
    //     res.render('register')
    // },

    register: (req, res) => {
        let categories = categoriesModel.all();

        res.render('register', { categories });
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
            // user.image = 'default.png';

            // if (req.file) {
            //     user.image = req.file.filename;
            // } else if (req.body.oldImage) {
            //     user.image = req.body.oldImage;
            // }

            // delete user.oldImage;

            userId = usersModel.create(user);

            res.redirect('index');
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