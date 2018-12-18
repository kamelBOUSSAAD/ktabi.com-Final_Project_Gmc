const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


// Load Input Validation
const validateCategorieInput = require('../../validation/categorie');

// Load categorie model
const Categorie = require('../../models/Categorie');


// @route   GET api/categorie/test
// @desc    Tests categorie route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'categerie Works' }));



// @route   POST api/categorie
// @desc    Create book Categorie
// @access  Private

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCategorieInput(req.body);

        // Check Validation
        if (!isValid) {
          return res.status(400).json(errors);
        }
    

        Categorie.findOne({ title: req.body.title }).then(categorie => {
            if (categorie) {
              errors.email = 'Categorie already exists';
              return res.status(400).json(errors);
            } else {
              // Get fields
                const categorieFields = {};
               // categorieFields.book = req.book.id;
                  if (req.body.title) categorieFields.title = req.body.title;
 
         // Save categorie
          new  Categorie(categorieFields).save().then(categorie => res.json(categorie));

            }
        });


      
                   
     }
 );
        
module.exports = router;
