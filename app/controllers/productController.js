const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/products.json'), 'utf-8'));
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/cart.json'), 'utf-8'));

const jsonTable = require('../dataBase/jsonTable');

const cartModel = jsonTable('cart');
const productsModel = jsonTable('products');
const categoriesModel = jsonTable('categories');

module.exports = {
    catalogue: (req,res) => {
        res.render('catalogo', { productos });
    },
    create: (req,res) => {
         res.render('create');
    },
    store: (req, res) => {
        // //Nuevo producto
        // let newProduct = {
        //     id: 30,
        //     brand: req.body.name,
        //     category: req.body.category,
        //     model1: req.body.model1,
        //     model2: req.body.model2,
        //     model3: req.body.model3,
        //     img: req.body.img,
        //     imgAux1: req.body.imgAux1,
        //     imgAux2: req.body.imgAux2,
        //     description: req.body.description,
        //     price: req.body.price
        // }

        // //Agrego el nuevo grupo a los existentes
        // productos.push(newProduct);

        // //Guardo el nuevo listado en el archivo JSON
        // res.redirect('/products');

        let product = req.body;
        product.img = '/images/default.jpg';
        if (req.file) {
            product.img = req.file.filename;
        }
        let newId = productsModel.create(product);
        
        res.redirect('/product/list');
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

        let product = productsModel.find(req.params.id);
        let categories = categoriesModel.all;

        res.render('edit', { product, categories });
    },
    update: (req, res) => {
        let product = req.body;

        product.id = req.params.id;
        product.img = '/images/productDetail2.jpg';
        
        if (req.file) {
            product.img = req.file.filename;
        } else if (req.body.oldImage) {
            product.img = req.body.oldImage;
        }

        delete product.oldImage;

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