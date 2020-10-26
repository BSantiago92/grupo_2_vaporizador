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
const { User, User_category, Token, Product, Item } = require('../dataBase/models');
const item = require('../dataBase/models/item');
const product = require('../dataBase/models/product');
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
                    const token = crypto.randomBytes(64).toString('base64');
                    Token.create({user_id: user.id, token });
                    // Seteamos una cookie en el navegador   msec   seg  min  hs  dias  meses
                    res.cookie('userToken', token, { maxAge: 1000 * 60 * 60 * 2} )
                        } 
                        return res.redirect('/');
                    } else {
                    res.render('login', {
                        userEmail: req.body.email,                               
                        errors: { processLogin: { msg: 'email o contraseña incorrectos'} }
                        });
                    }   
                }    
            })
        .catch(() => {
        // Creo un error y se lo envío a la vista
        res.render('login', {
                userEmail: req.body.email,                               
                errors: { processLogin: { msg: 'email o contraseña incorrectos'} }
            });
            })
            } else {
            function errorMsg(error) {
                if (error.email && error.password) {
                    return {
                        both : {
                            msg : "Campo obligatorio"
                        }
                    }
                } else if(error.email) {
                    return {
                        userEmail : {
                            msg : error.email.msg
                        }
                    }
                } else {
                    return {
                        password : {
                            msg : error.password.msg 
                        }
                    }
                }
            }
            console.log(errorMsg(errors.mapped()))
            // Se envía el error a la vista
            res.render('login', {
            userEmail: req.body.email,
            errors : errorMsg(errors.mapped())
            });
        }
    },
    logout: (req, res) => {
        // Borro todas los tokens del usuario (lo deslogueo de todos los dispositivos)
        let userTokens = usersTokensModel.findAllByField('userId', req.session.user.id);
        Token.destroy({where: { user_id: req.session.user.id}})
            .then(() => {
                return res.redirect('/');
            })

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
        if (errors.isEmpty()) {

            let user = req.body;

            let userObj = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                user_category_id: 2
            }

            let hash = bcrypt.hashSync(userObj.password, 10);
            userObj.password = hash;
            user.category_id = 2;

            User.create(userObj)
                .then(() => {
                    res.redirect("login");
                })
                .catch(error => {
                    console.log(error);
                })
            
            
        } else {
            console.log(errors.mapped());
            return res.render("register", {
                first_name: req.body,
                errors : errors.mapped()
            })
        }
    },
    profile: (req, res) => {
        res.render('userProfile');
    }
}