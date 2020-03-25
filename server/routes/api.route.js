const express = require('express');
const router = express.Router();

const userRoutes = require('../routes/user.route');
const productRoutes = require('./product.route');

router.use('/users/', userRoutes);
router.use('/products/', productRoutes);

module.exports = router;
