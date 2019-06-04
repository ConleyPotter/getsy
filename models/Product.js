const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

// Here I assume when we pass in an owner_id we will need to check if a user
// exists, I think it's done like this:
function userExistsValidator (user_id) {
  return Boolean(User.findById(user_id, (err, doc) => {
    if (doc) return doc;
    if (err) return null;
  }))
};

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
    type: ObjectID,
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
