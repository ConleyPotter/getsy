const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this model represents 1 item in a shopping cart,
// not an entire cart
const ShoppingCartItemSchema = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'products'
  },
  quantity: {
    type: Number
  }
})

module.exports = ShoppingCartItem = mongoose.model('cart', ShoppingCartItemSchema)

// update
// find cart by owner_id && || product_id
// all => find all entries by owner_id
// create => find by owner_id / product_id, if no entry, then create
// update => 


// search for david and orange
// => create an instance of a shopping cart item which includes keys for
// david id and orange id
