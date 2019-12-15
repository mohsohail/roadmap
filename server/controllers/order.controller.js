const mongoose = require('mongoose');
const orderService = require('../services/order.service');
const userService = require('../services/user.service');

const createOrder = async (req, res) => {
  try {
    let payload = {
      // _id: new mongoose.Types.ObjectId(),
      ...req.body
    };
    const response = await orderService.createOrder(payload);
    return res.status(200).send(response);
  } catch (e) {
    res.status(500).send(err);
  }
};

const getAllOrder = async (req, res) => {
  try {
    let params = req.query;
    const response = await orderService.getAllOrder(params);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const payload = req.params;
    const orderDetails = await orderService.getOrder(payload);
    const userDetails = await userService.getUser({
      userId: orderDetails.data.userId
    });
    const response = {
      orderDetails,
      userDetails
    };
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    let payload = {
      _id: req.params.orderId,
      ...req.body
    };
    const response = await orderService.updateOrder(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const payload = req.params;
    const response = await orderService.deleteOrder(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createOrder,
  getAllOrder,
  getOrder,
  updateOrder,
  deleteOrder
};
