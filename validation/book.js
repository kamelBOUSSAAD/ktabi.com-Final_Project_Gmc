const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBookInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.author = !isEmpty(data.author) ? data.author : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.operation = !isEmpty(data.operation) ? data.operation : '';
  data.categorie = !isEmpty(data.categorie) ? data.categorie : '';
  data.rate = !isEmpty(data.rate) ? data.rate : '';
 
  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = 'Title must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = 'author field is required';
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = 'author field is required';
  }

  if (Validator.isEmpty(data.operation)) {
    errors.operation = 'operation field is required';
  }
  
  if (Validator.isEmpty(data.description)) {
    errors.description = 'description field is required';
  }

  if (!Validator.isLength(data.description, { min: 6, max: 150 })) {
    errors.description = 'description must be between 6 and 150 characters';
  }

  if (Validator.isEmpty(data.categorie)) {
    errors.categorie = 'categorie  field is required';
  }
 

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
