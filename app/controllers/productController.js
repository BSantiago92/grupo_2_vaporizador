const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/products.json'), 'utf-8'));

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
    edit: (req, res) => {


        let newProduct = {
            id: req.params.id,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            colors: req.body.colors,
            price: req.body.price,
        }


        const product = productos.find(product => product.id == req.params.id);
        console.log(product);

        res.render('edit', { product });
    },
    update: (req, res) => {
        res.send(req.body);
    },
}