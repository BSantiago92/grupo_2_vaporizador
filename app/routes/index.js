const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const guestRoutes = require('../middlewares/guestRoute')


router.get('/', controller.index);


module.exports = router;