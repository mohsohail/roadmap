const express = require('express');
const router = express.Router();

const userRoutes = require('../routes/user.route');
const productRoutes = require('./product.route');
const orderRoutes = require('./order.route');

router.use('/users/', userRoutes);
router.use('/products/', productRoutes);
router.use('/orders/', orderRoutes);

module.exports = router;
