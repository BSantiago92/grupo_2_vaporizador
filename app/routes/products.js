const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../img'),
    filename: (req,file, callback) => {
        callback(null, '/images/product-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });


router.get('/search', controller.search);

router.get('/detail/:id', controller.detail);

router.get('/catalogo', controller.catalogue);

router.get('/carrito', controller.cart);

router.delete('/carrito/:id', controller.destroy_cartP);

router.get('/products/:id/edit', controller.edit);

router.put('/products/:id', upload.single('img'), controller.update);

router.get('/list', controller.list);

router.delete('/list/:id', controller.destroy);


module.exports = router;