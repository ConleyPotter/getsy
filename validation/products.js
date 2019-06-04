const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDescriptionFieldForProducts(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : '';
}