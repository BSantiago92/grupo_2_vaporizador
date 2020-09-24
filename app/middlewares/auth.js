const jsonTable = require('../database/jsonTable');
const usersModel = jsonTable('user');
const usersTokensModel = jsonTable('usersTokens');

const { User, Token } = require("../database/models");


module.exports = (req, res, next) => {
    // Si hay un usuario en sesión
    if (req.session.user) {
        // Se lo paso a la vista
        res.locals.user = req.session.user;
        next()
    // O si tiene la cookie de recordar
    } else if (req.cookies.userToken) {

        Token.findOne({
            where: {
                token: req.cookies.userToken
            }
        })

        .then(foundToken => {
            // Se busca al usuario con el userid de la token
            // let userObj = usersModel.getByField("id", token.userId);
            User.findByPk(foundToken.user_id)
                .then(foundUser => {

                    // Se almacenan los datos del usuario en session y en locals
                    req.session.user = foundUser;
                    res.locals.user = foundUser;

                    next();
                })
                .catch(error => {
                    console.log(error);
                    next();
                });
        })
        .catch(error => {
            res.clearCookie('userToken');
            console.log(error);
            next();
        })
    } else {
        next();
    }
    //     let userToken = usersTokensModel.findByField('token', req.cookies.userToken);

    //     // Y si existe el token en base
    //     if (userToken) {
    //         let user = usersModel.find(userToken.userId);
            
    //         // Si existe un usuario para ese token
    //         if (user) {
    //             delete user.password;
                
    //             req.session.user = user;
    //             res.locals.user = user;
    //         }
    //     // Si no existe el token en base, le borramos la cookie
    //     } else {
    //         res.clearCookie('userToken');
    //     }
    // }
    // next();
};