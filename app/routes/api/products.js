const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/productController');

router.get('/', controller.index);
router.get('/:id', controller.detail);




module.exports = router;