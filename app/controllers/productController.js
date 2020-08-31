const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/products.json'), 'utf-8'));
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/cart.json'), 'utf-8'));

const jsonTable = require('../dataBase/jsonTable');

const cartModel = jsonTable('cart');
const productsModel = jsonTable('products');
const userModel = jsonTable('user');
const categoriesModel = jsonTable('categories');

module.exports = {
    catalogue: (req,res) => {
        res.render('catalogo', { productos });
    },
    detail: (req, res) => {
        res.render('productDetail')
    },
    detail: (req, res) => {

        const product = productos.find(product => product.id == req.params.id);

        res.render('productDetail', { product } );
    },

    cart: (req, res) => {

        res.render('productCart', { carrito });
    },
    destroy_cartP: (req, res) => {

        let product_cart = cartModel.find(req.params.id);
        
        cartModel.delete(req.params.id);

        res.redirect('/product/carrito')
    },
    list: (req,res) => {
        res.render('productList', { productos });
    },
    edit: (req, res) => {


        // let newProduct = {
        //     id: req.params.id,
        //     name: req.body.name,
        //     description: req.body.description,
        //     image: req.body.image,
        //     category: req.body.category,
        //     colors: req.body.colors,
        //     price: req.body.price,
        // }


        // const product = productos.find(product => product.id == req.params.id);
        // console.log(product);

        // res.render('edit', { product });



        let product = productsModel.find(req.params.id);
        let categories = categoriesModel.all;

        res.render('edit', { product, categories });
    },
    update: (req, res) => {
        // res.send(req.body);


        let product = req.body;

        product.id = req.params.id;
        
        if (req.file) {
            product.img = req.file.filename;
        } else if (req.body.oldImage) {
            product.img = req.body.oldImage;
        }

        // delete product.oldImage;

        productId = productsModel.update(product);

        res.redirect('/product/detail/' + productId)
    },
    destroy: (req, res) => {

        let product = productsModel.find(req.params.id);
        
        productsModel.delete(req.params.id);

        res.redirect('/product/list')
    },
    search: (req, res) => {
        let results = [];

        if (req.query.search) {
            results = productos.filter(product => product.brand.toLowerCase().includes(req.query.search.toLowerCase()));
        }

        console.log(results);

        res.render('search', { productos: results, search: req.query.search });
    }
}