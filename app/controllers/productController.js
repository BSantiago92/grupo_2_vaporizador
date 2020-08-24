const fs = require('fs');
const path = require('path');
const heroes = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/products.json'), 'utf-8'));

module.exports = {
    detail: (req, res) => {
        res.render('productDetail')
    },

    catalogue: (req, res) => {
        res.render('catalogo')
    },

    cart: (req, res) => {
        res.render('productCart')
    },
}