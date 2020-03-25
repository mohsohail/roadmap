const assert = require('assert');
const Order = require('../../models/order.model');

describe('updating the order', () => {
  let order;
  beforeEach(done => {
    order = new Order({
      status: 'new'
    });
    done();
  });
  it('find and update record by status from the orders collection', done => {
    Order.findOneAndUpdate({ status: 'new' }, { status: 'delivered' }).then(
      result => {
        Order.findOne({ status: 'delivered' }).then(result => {
          assert(result.status === 'delivered');
        });
        done();
      }
    );
  });
});
