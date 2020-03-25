const express = require('express');
const router = express.Router();

const product = require('../controllers/product.controller');
// endpoint - /api/v1/product/

router.post('/', product.createProduct);
router.get('/', product.getAllProduct);
router.get('/:productId', product.getProduct);
router.patch('/:productId', product.updateProduct);
router.delete('/:productId', product.deleteProduct);

module.exports = router;
