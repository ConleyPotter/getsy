const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.fName = validText(data.fName) ? data.fName : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isLength(data.fName, { min: 2, max: 30 })) {
    errors.handle = 'First name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.fName)) {
    errors.handle = 'First name is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 5, max: 30 })) {
    errors.password = 'Password must be at least 5 characters';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};