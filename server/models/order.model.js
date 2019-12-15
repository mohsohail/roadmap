const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  status: {
    type: String,
    enum: ['new', 'preparing', 'delivering', 'delivered'],
    required: true,
    default: 'new'
  },
  productId: {
    type: String,
    required: true
  },
  productQuantity: {
    type: Number,
    required: true,
    default: 1
  },
  productSize: {
    type: String,
    required: true,
    enum: ['small', 'medium', 'large'],
    default: 'small'
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: false,
    default: () => new Date()
  },
  updatedAt: {
    type: Date,
    required: false,
    default: () => new Date()
  }
});

module.exports = mongoose.model('Order', OrderSchema);
