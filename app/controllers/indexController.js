const fs = require('fs');
const path = require('path');
const usuario = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/user.json'), 'utf-8'));


const jsonTable = require('../dataBase/jsonTable');

const usersModel = jsonTable('user');

module.exports = {
    index: (req, res) => {
        res.render('index/index')
    },
    admin: (req, res) => {
        res.render('menuAdmin', {usuario});
    }
}