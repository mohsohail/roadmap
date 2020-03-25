const orderRepo = require('../repositories/order.repository');

const createOrder = async payload => {
  try {
    let orderData = await orderRepo.createOrder(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: orderData
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getAllOrder = async params => {
  try {
    let orders = await orderRepo.getAllOrder(params);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: orders
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getOrder = async payload => {
  try {
    let order = await orderRepo.getOrder(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: order
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const updateOrder = async payload => {
  try {
    let order = await orderRepo.updateOrder(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: order
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const deleteOrder = async payload => {
  try {
    let order = await orderRepo.deleteOrder(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: order
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

module.exports = {
  createOrder,
  getAllOrder,
  getOrder,
  updateOrder,
  deleteOrder
};
