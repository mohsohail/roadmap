const ProductModel = require('../models/Product.model');

const getAllProduct = async () => {
  try {
    return await ProductModel.find({});
  } catch (e) {
    throw e;
  }
};

const getProduct = async ({ productId }) => {
  try {
    return await ProductModel.findById(productId);
  } catch (e) {
    throw e;
  }
};

const getProductViaUrl = async ({ urlId }) => {
  try {
    return await ProductModel.findOne({ urlId });
  } catch (e) {
    throw e;
  }
};

const createProduct = async payload => {
  try {
    const productData = new ProductModel(payload);
    return await productData.save();
  } catch (err) {
    throw err;
  }
};

const updateProduct = async ({ productId }) => {
  try {
    return await ProductModel.update(
      { _id: productId },
      {
        $set: {}
      }
    );
  } catch (e) {
    throw e;
  }
};

const deleteProduct = async ({ productId }) => {
  try {
    return await ProductModel.remove({ _id: productId });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
  getProductViaUrl,
  updateProduct,
  deleteProduct
};
