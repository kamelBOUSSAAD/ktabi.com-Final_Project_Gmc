const Validator = require('validator');
const isEmpty = require('./is-empty');
const isNumber = require('is-number');

  

  
 
module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 16 })) {
    errors.handle = 'Handle needs to between 2 and 16 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'location field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'address field is required';
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'phone field is required';
  }
  if ((data.phone).length !=8) {
    errors.phone = 'Phone must be 8 characters';
  }
  if (!isNumber(data.phone)) {
    errors.phone = 'phone not a number ';
  }

 
  return {
    errors,
    isValid: isEmpty(errors)
  };
};



