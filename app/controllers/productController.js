const path = require('path');

module.exports = {
    detail: (req, res) => {
        res.render('productDetail')
    },

    catalogue: (req, res) => {
        res.render('catalogo')
    },

    cart: (req, res) => {
        res.render('productCart')
    }
}