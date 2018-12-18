const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRateInput(data) {
  let errors = {};

 
  if (Validator.isEmpty(data.rate)) {
    errors.rate = 'rate field is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
