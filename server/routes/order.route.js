const express = require('express');
const router = express.Router();

const order = require('../controllers/order.controller');
// endpoint - /api/v1/order/

router.post('/', order.createOrder);
router.get('/', order.getAllOrder);
router.get('/:orderId', order.getOrder);
router.patch('/:orderId', order.updateOrder);
router.delete('/:orderId', order.deleteOrder);

module.exports = router;
