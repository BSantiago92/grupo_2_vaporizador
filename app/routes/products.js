const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');


router.get('/', controller.detail);

router.get('/catalogo', controller.catalogue);

router.get('/carrito', controller.cart);

module.exports = router;