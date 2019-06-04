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
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model("products", ProductSchema);
