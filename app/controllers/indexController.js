const fs = require('fs');
const path = require('path');
const usuario = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/user.json'), 'utf-8'));


const jsonTable = require('../dataBase/jsonTable');

const { User, Item, Product } = require('../dataBase/models');

module.exports = {
    index: (req, res) => {
        Item.findAll({where: {user_id: 20}, include: 'Product'})
            .then(masVendido => {
                return res.render('index', {masVendido});
            })
    },
    admin: (req, res) => {
        User.findAll({include: 'User_category'})
        .then(users => {
            return res.render('menuAdmin', { users });
        })
        .catch(error => {
            console.log(error);
            res.redirect('/');
        })
    },
    delete: (req,res) => {
        User.destroy({where: { id: req.params.id}})
        .then(deleteUser => {
            return res.redirect('/admin');
        })
    }
}