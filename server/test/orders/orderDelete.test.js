const assert = require('assert');
const Order = require('../../models/order.model');

describe('deleting the order', () => {
  let order;
  beforeEach(done => {
    order = new Order({
      status: 'new'
    });
    done();
  });
  it('find and delete record by Id from the orders collection', done => {
    Order.findOneAndRemove({ _id: order._id }).then(result => {
      Order.findOne({ _id: order._id }).then(result => {
        assert(result === null);
      });
      done();
    });
  });
});
