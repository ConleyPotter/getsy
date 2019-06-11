const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { userExistsValidator } = require('../validation/products');

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner_id: {
    type: Schema.ObjectId,
    validate: [
      userExistsValidator,
      "The user must exist."
    ],
    required: true
    // dbl check; SM said this should have this as it's a foreign key,
    // but just in case it breaks something.
    // ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    // required: true
  },
  image_url:{
    type: String
  }
});

module.exports = Product = mongoose.model("products", ProductSchema);
