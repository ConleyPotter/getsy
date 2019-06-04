const Validator = require("validator");
const validText = require("./valid-text");
const User = require("../models/User")

// This will test whether the user has entered a description that is of the
// appropriate length when creating a product page
const validateProductDescription = (data) => {
  let errors = {};

  data.description = validText(data.description) ? data.description : "";

  if (!Validator.isLength(data.description, { min: 5, max: 500 })) {
    errors.description = "Description must be between 5 and 500 characters";
  }

  if (Validator.isEmpty(data.description)) {
    console.log(data.description)
    errors.description = "Description field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};

const userExistsValidator = (user_id) => {
  return Boolean(User.findById(user_id, (err, doc) => {
    if (doc) return doc;
    if (err) return null;
  }))
};

module.exports = {
  validateProductDescription,
  userExistsValidator
}