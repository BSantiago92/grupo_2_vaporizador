const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const guestRoutes = require('../middlewares/guestRoute');
const adminRoutes = require('../middlewares/adminRoute');


router.get('/', controller.index);

router.get('/admin', adminRoutes,controller.admin);

router.delete('/admin/:id', controller.delete);



module.exports = router;