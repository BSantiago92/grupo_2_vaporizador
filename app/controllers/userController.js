const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
// imprime el codigo enciptado de mi password que lo tengo que guardar en la base de datos
console.log(bcrypt.hashSync('123456789', 10));

const { check, validationResult, body } = require('express-validator');
const usuario = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/user.json'), 'utf-8'));

const jsonTable = require('../dataBase/jsonTable');

const usersModel = jsonTable('user');
const { User, User_category, Token } = require('../dataBase/models');
const usersTokensModel = jsonTable('usersTokens');


module.exports = {
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {        
            User.findOne({
                where: {email: req.body.email}
            })
            // si existe el usuario
            .then(user => {
                    if (user) {
                        //si la contraseña es correcta

                        if(bcrypt.compareSync(req.body.password, user.password)) {
                            // lo guardo en la session
                            delete user.password;
                            req.session.user = user;
                            // logeo al usuario
                            //si pidió que lo recordemos 
                            if (req.body.remember) {
                                // Generamos un token seguro, eso para que no pueda entrar cualquiera
                                // https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
                                const token = crypto.randomBytes(64).toString('base64');
                                Token.create({user_id: user.id, token });
                                // Seteamos una cookie en el navegador   msec   seg  min  hs  dias  meses
                                res.cookie('userToken', token, { maxAge: 1000 * 60 * 60 * 2} )
                            } 
                            return res.redirect('/');
                        } else {
                            res.render('login', {
                            errors: { password: { msg: 'email o contraseña incorrectos'} },
                            user: req.body
                            });
                        }   
                    }    
            })
            .catch(() => {
                // Creo un error y se lo envío a la vista
                res.render('login', {
                    errors: errors.mapped(),
                    user: req.body
                });
            })
        }

        // } else {
        //     res.render('login', {
        //         errors: errors.mapped(),
        //         user: req.body
        //     });
        // }   

        // Obtengo el usuario por medio de su email ó nombre de usuario
        // User.findOne({
        //     where: { email: req.body.email }
        // })
        //     .then(user => {
        //         let errors;

        //         // Si el usuario ingresa la contraseña correcta
        //         if(bcrypt.compareSync(req.body.password, user.password)){   

        //             // Se guarda al usuario en session
        //             req.session.user = user;

        //             // Si el usuario marcó "recordarme" le envíamos una cookie
        //             if(req.body.remember){
                        
        //                 // Se genera un token seguro y aleatorio para la cookie
        //                 const generatedToken = crypto.randomBytes(48).toString("base64");
                        
        // //                 // Se almacena el token en la base de datos con el ID del usuario para vincularlo al mimso a futuro
        //                 Token.create({ user_id: user.id, token: generatedToken});
                        
        // //                 // Almacena el Token en la cookie por un mes
        //                 res.cookie("uTwS", generatedToken, {maxAge : 1000 * 60 * 60 * 2});
        //             }
    
        
        //             res.redirect("/");
        
        //         } else {
        //             // Creo un error y se lo envío a la vista
        //             res.render("login", {
        //                 errors: { password: { msg: 'email o contraseña incorrectos'} },
        //                 user: req.body
        //             });
        //         }

        //     })
        //     .catch(() => {
        //         // Creo un error y se lo envío a la vista
        //         res.render("login", {
        //             errors: errors.mapped(),
        //             user: req.body
        //         });
        //     })

    },
    logout: (req, res) => {
        // Borro todas los tokens del usuario (lo deslogueo de todos los dispositivos)
        let userTokens = usersTokensModel.findAllByField('userId', req.session.user.id);
        userTokens.forEach(userToken => {
            usersTokensModel.delete(userToken.id);
        });

        // Borro solo el token del dispositivo desde donde se está logeando
        // let userToken = usersTokensModel.findByField('token', req.cookies.userToken);
        // usersTokensModel.delete(userToken.id);

        res.clearCookie('userToken');


        req.session.destroy();

        return res.redirect('/');
    },
    register: (req, res) => {

        res.render('register');

    },
    registerUser: (req, res) => {
        let errors = validationResult(req);
        //console.log(req.body)
        if (errors.isEmpty()) {
            let users = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/user.json'), 'utf-8'));
            let newUser = JSON.stringify(req.body);
            newUser = JSON.parse(newUser)
                //console.log(users)
                //console.log(newUser)

            newUser.password = bcrypt.hashSync(req.body.password, 10);

            users.push(newUser);
            //console.log(users)
            let usersJson = JSON.stringify(users);

            fs.writeFileSync(path.join(__dirname, '../data/user.json'), usersJson);
            //req.session.user = newUser;
            res.redirect('/');

        } else {
            res.send("Error en el registro")
        }





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
    profile: (req, res) => {
        res.render('userProfile');
    }
}