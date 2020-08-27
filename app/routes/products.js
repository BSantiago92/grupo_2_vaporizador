const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');


router.get('/detail/:id', controller.detail);

router.get('/catalogo', controller.catalogue);

router.get('/carrito', controller.cart);

router.get('/products/:id/edit', controller.edit);

router.put('/products/:id', controller.update);

router.get('/list', controller.list);

router.delete('/list/:id', controller.destroy);


module.exports = router;