const assert = require('assert');
// const mongoose = require('mongoose');
const Order = require('../../models/order.model');

// beforeEach(done => {
//   mongoose.connection.collections.orders.drop(() => {
//     done();
//   });
// });

describe('placing the order', () => {
  it('adds a new order record', done => {
    const order = new Order({
      status: 'new'
    });
    order.save().then(() => {
      assert(order.isNew === false);
    });
    done();
  });
});
