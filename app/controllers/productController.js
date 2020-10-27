const fs = require('fs');
const path = require('path');
const jsonTable = require('../dataBase/jsonTable');
const { check, validationResult, body } = require('express-validator');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/products.json'), 'utf-8'));
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, '/../data/cart.json'), 'utf-8'));

// const cartModel = jsonTable('cart');
// const productsModel = jsonTable('products');
// const categoriesModel = jsonTable('categories');
// const brandsModel = jsonTable('brands');
const {Op} = require('sequelize');

const { Product, Category, Brand, Item, Cart} = require('../dataBase/models');

module.exports = {
    catalogue: (req,res) => {
        Product.findAll({order: [['price', 'DESC']]})
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
        Item.findAll({where: { user_id: req.session.user.id}, include: 'Product'})
            .then(item => {
                return res.render('productCart', { item });
            })
            .catch(error => {
                console.log(error);
                res.redirect('/');
            })
    },
    addToCart: (req,res) => {
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            Product.findByPk(req.params.id)
            .then((product) => {
                let price = product.price;

                let itemObj = {
                    salePrice: price,
                    quantity: req.body.quantity,
                    subTotal: price * req.body.quantity,
                    state: 1,
                    product_id: product.id,
                    user_id: req.session.user.id,
                }

                Item.create(itemObj)
            })
            .then(() => res.redirect('/product/carrito'))
            .catch((e) => console.log(e));
        } else {
            Product.findByPk(req.body.id, {
                include: 'Item',
            })
            .then(product => {
                return res.render('/product/detail', {product, errors: 
                errors.mapped()})
            })
        }
    },
    destroy_cartP: (req, res) => {
        Item.destroy({where: { id: req.params.id}})
        .then(deleteProduct => {
            return res.redirect('/product/carrito');
        })
    },
    list: (req,res) => {
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
        updateProduct.img = '/images/productroductDetail2.jpg';
        
        if (req.file) {
            updateProduct.img = req.file.filename;
        } else if (req.body.oldImage) {
            updateProduct.img = req.body.oldImage;
        }

        delete updateProduct.oldImage;

        Product.update(updateProduct, {where: { id: req.params.id}})
        .then(updateProduct => {
            return res.redirect('/product/detail/' + req.params.id);
        })

    },
    destroy: (req, res) => {
        Product.destroy({where: { id: req.params.id}})
        .then(deleteProduct => {
            return res.redirect('/product/list');
        })
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