const assert = require('assert');
const Order = require('../../models/order.model');
const mongoose = require('mongoose');

mongoose.promise = global.Promise;

describe('finding the order', () => {
  // let order;
  beforeEach(done => {
    order = new Order({
      status: 'new'
    });
    done();
  });
  it('find all order records', done => {
    Order.find({}).then(result => {
      assert(Array.isArray(result));
    });
    done();
  });
  it('find record filtered by status', done => {
    Order.findOne({ status: 'new' }).then(result => {
      assert(result.status === 'new');
    });
    done();
  });
  // it('find record by Id from the orders collection', done => {
  //   Order.findOne({ _id: order._id }).then(result => {
  //     assert(result._id.toString() === order._id.toString());
  //   });
  //   done();
  // });
});
