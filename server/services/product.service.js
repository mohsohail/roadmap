const productRepo = require('../repositories/product.repository');

const createProduct = async payload => {
  try {
    let productData = await productRepo.createProduct(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: productData
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getAllProduct = async () => {
  try {
    let products = await productRepo.getAllProduct();
    return {
      err: false,
      message: 'success',
      status: 200,
      data: products
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const getProduct = async payload => {
  try {
    let product = await productRepo.getProduct(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: product
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const updateProduct = async payload => {
  try {
    let product = await productRepo.updateProduct(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: product
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500
    };
  }
};

const deleteProduct = async payload => {
  try {
    let product = await productRepo.deleteProduct(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: product
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
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct
};
