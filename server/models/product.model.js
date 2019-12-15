const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    enum: ['margarita', 'salami', 'marinara'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large'],
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

module.exports = mongoose.model('Product', ProductSchema);
