const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,  '/../public/productDetail.html'))
})

router.get('/catalogo', function(req, res) {
    res.sendFile(path.join(__dirname,  '/../public/catalogo.html'))
})

router.get('/carrito', function(req, res) {
    res.sendFile(path.join(__dirname,  '/../public/productCart.html'))
})

module.exports = router;