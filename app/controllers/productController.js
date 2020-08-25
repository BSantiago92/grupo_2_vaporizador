const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/products.json'), 'utf-8'));

module.exports = {
    catalogue: (req,res) => {
        res.render('catalogo', { products });
    },
    // detail: (req, res) => {
    //     res.render('productDetail')
    // },
    detail: (req, res) => {

        const product = products.find(product => product.id == req.params.id);

        res.render('productDetail', { product } );
    },

    cart: (req, res) => {
        res.render('productCart')
    },
}