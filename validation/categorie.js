const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCategorieInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = 'categorie title must be between 2 and 30 characters';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
