const path = require('path');

module.exports = {
    index: (req, res) => {
        res.render('index/index')
    },
    admin: (req, res) => {
        res.render('menuAdmin')
    }
}