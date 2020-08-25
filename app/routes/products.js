const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');


router.get('/', controller.detail);

router.get('/catalogo', controller.catalogue);

router.get('/carrito', controller.cart);

router.get('/products/:id/edit', controller.edit);

router.put('/products/:id', controller.update);


module.exports = router;