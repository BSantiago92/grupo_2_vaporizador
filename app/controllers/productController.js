const fs = require('fs');
const path = require('path');
const jsonTable = require('../dataBase/jsonTable');
const { check, validationResult, body } = require('express-validator');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/products.json'), 'utf-8'));
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/cart.json'), 'utf-8'));

const cartModel = jsonTable('cart');
// const productsModel = jsonTable('products');
const categoriesModel = jsonTable('categories');
const brandsModel = jsonTable('brands');
const {Op} = require('sequelize');

const { Product, Category, Brand} = require('../dataBase/models');

module.exports = {
    catalogue: (req,res) => {
        Product.findAll()
            .then(products => {
                return res.render('catalogo', { products });
            })
            .catch(error => {
                console.log(error);
                res.redirect('/');
            })
    },
    create: (req,res) => {
        Category.findAll()
        .then(categories => {
            return res.render('create', { categories });
        })
        .catch(error => {
            console.log(error);
            res.redirect('/');
        })
    },
    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

        let newProduct = req.body;
        newProduct.img = '/images/default.jpg';
        if (req.file) {
            newProduct.img = req.file.filename;
        } else if (req.body.oldImage) {
            newProduct.img = req.body.oldImage;
        }

        delete newProduct.oldImage;

        Product.create(newProduct)
        .then(newProduct => {
            return res.redirect('/product/detail/' + newProduct.id);
        })
    } else {
        // let categories = categoriesModel.all();

        Category.findAll()
            .then(categories => {
                return res.render('create',  { 
                    categories,
                    errors: errors.mapped(), 
                    Product: req.body
                });
            })
            .catch(error => {
                console.log(error);
                return res.redirect('/');
            })
    }
    },
    detail: (req, res) => {

        // const product = productos.find(product => product.id == req.params.id);
        // res.render('productDetail', { product } );


        Product.findByPk(req.params.id,{ include: 'Category'})
        .then(product => {
            return res.render('productDetail', { product });
        })
        .catch(error => {
            console.log(error);
            res.redirect('/');
        })


    },

    cart: (req, res) => {

        Product.findAll({where: {brand_id: 2 }})
            .then(products => {
                return res.render('productCart', { carrito, products });
            })
            .catch(error => {
                console.log(error);
                res.redirect('/');
            })
            
    },
    destroy_cartP: (req, res) => {

        let product_cart = cartModel.find(req.params.id);
        
        cartModel.delete(req.params.id);

        res.redirect('/product/carrito')
    },
    list: (req,res) => {
        // res.render('productList', { productos });
        Product.findAll()
        .then(products => {
            return res.render('productList', { products });
        })
        .catch(error => {
            console.log(error);
            res.redirect('/');
        })
    },
    edit: async (req, res) => {
        // let product = productsModel.find(req.params.id);
        // let categories = categoriesModel.all;
        // res.render('edit', { product, categories });

        const categories = await Category.findAll();

        

        Product.findByPk(req.params.id,{ include: 'Category'})
        .then(product => {
            return res.render('edit', { product, categories });
        })
        .catch(error => {
            console.log(error);
            res.redirect('/');
        })

    },
    update: (req, res) => {
        let updateProduct = req.body;

        //updateProduct.id = req.params.id;
        updateProduct.img = '/images/productroductDetail2.jpg';
        
        if (req.file) {
            updateProduct.img = req.file.filename;
        } else if (req.body.oldImage) {
            updateProduct.img = req.body.oldImage;
        }

        delete updateProduct.oldImage;

        // productId = productsModel.update(product);

        // res.redirect('/product/detail/' + productId)

        Product.update(updateProduct, {where: { id: req.params.id}})
        .then(updateProduct => {
            return res.redirect('/product/detail/' + req.params.id);
        })

    },
    destroy: (req, res) => {

        // let product = productsModel.find(req.params.id);
        // productsModel.delete(req.params.id);

        Product.destroy({where: { id: req.params.id}})
        .then(deleteProduct => {
            return res.redirect('/product/list/' + req.params.id);
        })

        // res.redirect('/product/list')
    },
    search: (req, res) => {      

        Product.findAll({where: {name: { [Op.substring]: req.query.search } } })
            .then(products => {
                return res.render('search', {products});
            })
            .catch(error => {
                console.log(error);
                res.redirect('/');
            })
    }
}