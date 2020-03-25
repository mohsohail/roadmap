const productService = require('../services/product.service');
const mongoose = require('mongoose');

const createProduct = async (req, res) => {
  try {
    let payload = {
      // _id: new mongoose.Types.ObjectId(),
      ...req.body
    };
    const response = await productService.createProduct(payload);
    return res.status(200).send(response);
  } catch (e) {
    res.status(500).send(err);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const response = await productService.getAllProduct();
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getProduct = async (req, res) => {
  try {
    const payload = req.params;
    const response = await productService.getProduct(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateProduct = async (req, res) => {
  try {
    let payload = {
      _id: req.params.id,
      ...req.body
    };
    const response = await productService.updateProduct(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const payload = req.params;
    const response = await productService.deleteProduct(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct
};
