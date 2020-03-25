const OrderModel = require('../models/Order.model');

const createOrder = async payload => {
  try {
    const orderData = new OrderModel(payload);
    return await orderData.save();
  } catch (err) {
    throw err;
  }
};

const getAllOrder = async ({ status, userId }) => {
  try {
    console.log('the params are', status, userId);
    // filter by status
    if (status) {
      return await OrderModel.find({ status });
    }
    if (userId) {
      return await OrderModel.find({ userId });
    }
    if (status && userId) {
      return await OrderModel.find({
        status,
        userId
      });
    } else {
      return await OrderModel.find({});
    }
  } catch (e) {
    throw e;
  }
};

const getOrder = async ({ orderId }) => {
  try {
    return await OrderModel.findById(orderId);
  } catch (e) {
    throw e;
  }
};

const updateOrder = async ({ _id, status }) => {
  try {
    const response = await OrderModel.findById(_id);
    if (!response.status === 'delivered') {
      return await OrderModel.findByIdAndUpdate(
        _id,
        { $set: { status } },
        { new: true }
      );
    } else {
      return {
        message: 'Cannot update order post delivered state'
      };
    }
  } catch (e) {
    throw e;
  }
};

const deleteOrder = async ({ orderId }) => {
  try {
    return await OrderModel.remove({ _id: orderId });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createOrder,
  getAllOrder,
  getOrder,
  updateOrder,
  deleteOrder
};
