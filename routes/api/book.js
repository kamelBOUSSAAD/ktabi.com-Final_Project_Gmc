const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');



// Load Input Validation
const validateBookInput = require('../../validation/book');
const validateRateInput = require('../../validation/rate');

// Load Book model
const Book = require('../../models/Book');



// @route   POST api/book/
// @desc    Create user book
// @access  Private

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateBookInput(req.body);

        // Check Validation
        if (!isValid) {
          return res.status(400).json(errors);
        }
    
        // Get fields
        const bookFields = {};
        bookFields.user = req.user.id;
       // bookFields.categerie = req.categerie.id;

        if (req.body.title) bookFields.title = req.body.title;
        if (req.body.author) bookFields.author = req.body.author;
        if (req.body.description) bookFields.description = req.body.description;
        if (req.body.operation) bookFields.operation = req.body.operation;
        if (req.body.categorie) bookFields.categorie = req.body.categorie;
    
        // Save Profile
         new  Book(bookFields).save().then(book => res.json(book));
                   
     }
 );
        

// @route   POST api/book:userID
// @desc    GET all books of user
// @access  Public
router.get('/:user_id', (req, res) => {
    const errors = {};
  
    Book.find({ user: req.params.user_id })
      .populate('user', ['name', 'avatar'])
      .then(book => {
        if (!book) {
          errors.nobook = 'There is no book for this user';
          res.status(404).json(errors);
        }

        res.json(book);
      })
      .catch(err => res.status(404).json(err));
 
  });
        

  
// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Book.findOneAndRemove({ _id: req.params.id}).then(() => {
      res.json({ success: true })
      .catch(err => res.json({error : true}))
    });
  }
);
      


// @route   PUT api/book
// @desc    edit book by id user  
// @access  Private
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBookInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const bookFields = {};
    bookFields.user = req.user.id;
    if (req.body.title) bookFields.title = req.body.title;
    if (req.body.author) bookFields.author = req.body.author;
    if (req.body.description) bookFields.description = req.body.description;
    if (req.body.operation) bookFields.operation = req.body.operation;
    if (req.body.categorie) bookFields.categorie = req.body.categorie;

        // Update
        Book.findOneAndUpdate(
          { _id: req.params.id },
          { $set: bookFields }
        ).then(book => res.json(book));
      


  }
  );
      
   





// @route   POST api/book/rate
// @desc    raiting book by user 
// @access  Private
router.put(
  '/rate/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRateInput({rate:req.body.rate});

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const rateBookField = {};
    if (req.body.rate) rateBookField.rate = req.body.rate;

        // Update
        Book.findOneAndUpdate(
          { _id: req.params.id },
          { $set: rateBookField }
        ).then(book => res.json({rating : 'ok'})
        .catch(err => res.json(err))
        );
      


  }
  );




module.exports = router;
