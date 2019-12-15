const express = require('express');
const router = express.Router();

const userRoutes = require('../routes/user.route');
const productRoutes = require('./product.route');
const orderRoutes = require('./order.route');

router.use('/user/', userRoutes);
router.use('/product/', productRoutes);
router.use('/order/', orderRoutes);

module.exports = router;
